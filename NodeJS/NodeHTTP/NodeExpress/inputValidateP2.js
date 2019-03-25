const joi = require('joi');

const arrayString = ['banana', 'shit', 'cheese'];
const arrayObj = [{ example: 'example1' }, { example: 'example2' }];

const userInput = {
    personalInfo: {
        streetAddress: '1234567',
        city: 'Ha Noi',
        state: 'f1'
    },
    preferences: arrayObj
};

//create schema for object personal, array preferences
const personalSchema = joi.object().keys(
    {
        streetAddress: joi.string().trim().required(),
        city: joi.string().trim().required(),
        state: joi.string().trim().length(2).required()
    }
);

//const preferencesSchema = joi.array().items(joi.string());
const preferencesSchema = joi.array().items(joi.object().keys({
    example: joi.string().trim().required()
}));

const schema = joi.object().keys({
    personalInfo: personalSchema,
    preferences: preferencesSchema
});

joi.validate(userInput, schema, (err, result) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
})