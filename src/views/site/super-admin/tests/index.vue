<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    {{ questions }}
    <div v-if="questions">
      <h2>Questions:</h2>
      <ul>
        <li v-for="(question, index) in questions" :key="index">
          <strong>{{ question.question }}</strong>
          <ul>
            <li
              v-for="(answer, answerIndex) in question.answers"
              :key="answerIndex"
            >
              {{ answer.text }} ({{ answer.correct ? "To'g'ri" : "Noto'g'ri" }})
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mammoth from "mammoth";

export default {
  name: "AppTest",
  data() {
    return {
      documentContent: null,
      questions: null,
    };
  },
  methods: {
    async handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        try {
          const result = await this.readFileAsync(file);
          const { value } = await mammoth.extractRawText({
            arrayBuffer: result,
          });
          this.documentContent = value;
          this.parseQuestions();
        } catch (error) {
          console.error("Xatolik boldi bro:", error);
        }
      }
    },
    async readFileAsync(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsArrayBuffer(file);
      });
    },
    parseQuestions() {
      const regex = /\+\+\+\s+(.*?)\s+====\s+(.*?)\s+(?:#(.*?))?\s+\+\+\+/gs;
      const matches = [...this.documentContent.matchAll(regex)];

      this.questions = matches.map((match) => {
        const question = match[1].trim();
        const correctAnswer = match[2].trim();
        const userAnswer = match[3] ? match[3].trim() : null;
        const isCorrectAnswer = userAnswer === correctAnswer;
        const options = [match[2].trim()];
        if (match[4]) {
          options.push(match[4].trim());
        }
        if (match[5]) {
          options.push(match[5].trim());
        }
        if (match[6]) {
          options.push(match[6].trim());
        }
        return {
          question: question,
          answers: options.map((answer, index) => ({
            id: index + 1,
            text: answer,
          })),
          correctAnswer: options.indexOf(correctAnswer) + 1,
          isCorrectAnswer: isCorrectAnswer,
        };
      });
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
