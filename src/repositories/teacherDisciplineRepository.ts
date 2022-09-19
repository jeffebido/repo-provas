import prisma from '../db';

export async function getTeacherDisciplineByTeacherAndDiscipline(teacherId: number, disciplineId: number) {
    
    const teacherDiscipline = await prisma.teachersDisciplines.findFirst({
        where: {
          teacherId: teacherId,
          disciplineId: disciplineId
        }
    });


    return teacherDiscipline
}
