import { Controller, Get, Param } from '@nestjs/common';
import { readFileSync } from 'fs';

@Controller('api/questions')
export class ApiController {
  @Get()
  getAllQuestions() {
    const data = readFileSync('src/data.json', 'utf8');
    const questions = JSON.parse(data);
    return questions;
  }

  @Get(':quizId')
  getQuestionsByQuizId(@Param('quizId') quizId: number) {
    const data = readFileSync('src/data.json', 'utf8');
    const questions = JSON.parse(data);
    if (questions[quizId] !== undefined)
      return questions[quizId];
  }
}
