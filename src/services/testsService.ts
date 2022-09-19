import { createTest } from '../repositories/testsRepositorie'
import { getTeacherDisciplineByTeacherAndDiscipline } from '../repositories/teacherDisciplineRepository'
import { CreateTestData } from '../types/testsTypes';




export async function CreateTest(testData: CreateTestData){
  
  const teacherDiscipline = await getTeacherDisciplineByTeacherAndDiscipline(testData.teacher, testData.discipline);

  if(teacherDiscipline){
    await createTest(testData, teacherDiscipline.id);
  }
  
}