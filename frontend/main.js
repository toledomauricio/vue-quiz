const app = Vue.createApp({
  data() {
    return {
      idx: 0,
      quizCompleted: false,
      selectedAnswer: "",
      correctAnswers: 0,
      wrongAnswers: 0,
      questionsLength: 0,
      barPercentage: 1,
      questions: [],
    };
  },
  methods: {
    answered(e) {
      this.selectedAnswer = e.target.value;
      // se a resposta selecionada for igual a resposta correta
      if (this.selectedAnswer == this.questions[this.idx].correctAnswer) {
        this.correctAnswers++;
      } else {
        this.wrongAnswers++;
      }
    },
    nextQuestion() {
      this.idx++;
      this.selectedAnswer = "";
      this.barPercentage = this.barPercentage + this.questionsLength + 1; // incrementando a progress bar
      document.querySelectorAll("input").forEach((el) => (el.checked = false));
    },
    showResults() {
      this.idx++;
      this.barPercentage = 100; // incrementando a progressbar até o final para evitar que fique 1% vazia
      this.quizCompleted = true;
    },
    resetQuiz() {
      this.idx = 0;
      this.selectedAnswer = "";
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
      this.barPercentage = 1; // esvaziando a progressbar
      this.quizCompleted = false;
    },
  },
  created() {
    fetch('http://localhost:3001/api/questions/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.questions = data;
        this.questionsLength = data.length;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
});

app.mount("#app");
