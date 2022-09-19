import joi from 'joi';

const testsSchema = joi.object({
	name: joi.string().max(200).required(),
    pdfUrl: joi.string().max(200).required(),
    category: joi.number().required(),
    discipline: joi.number().required(),
    teacher: joi.number().required()
});


export {testsSchema};