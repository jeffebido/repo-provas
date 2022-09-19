import prisma from '../db';
import { tests } from '@prisma/client';

import { CreateTestData } from '../types/testsTypes';

export type TypeTestData = Omit<tests, 'id'>;


export async function createTest(testData: CreateTestData, teacherDisciplineId: number) {
    

    const newTest : TypeTestData = {
        name: testData.name,
        pdfUrl: testData.pdfUrl,
        categoryId: testData.category,
        teacherDisciplineId: teacherDisciplineId
    }
    
    await prisma.tests.create({ data: newTest });
}
