import { frameworks, url, initSurvey, getSurveyResult, getQuestionValue, getQuestionJson } from "../helper";
import { ClientFunction } from "testcafe";
const assert = require("assert");
const title = `imagepicker`;

const json = {
  questions: [
    {
      type: "imagepicker",
      name: "choosepicture",
      title: "What animal would you like to see first ?",
      isRequired: true,
      choices: [
        {
          value: "lion",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
        },
        {
          value: "giraffe",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
        },
        {
          value: "panda",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
        },
        {
          value: "camel",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
        }
      ]
    }
  ]
};

frameworks.forEach(framework => {
  fixture`${framework} ${title}`.page`${url}${framework}.html`.beforeEach(
    async t => {
      await initSurvey(framework, json);
    }
  );

  test(`check integrity`, async t => {
    await t
      .hover(`fieldset.sv_imgsel .sv_q_imgsel:nth-child(2)`)
      .hover(`fieldset.sv_imgsel .sv_q_imgsel:nth-child(3)`)
      .hover(`fieldset.sv_imgsel .sv_q_imgsel:nth-child(4)`)
      .hover(`fieldset.sv_imgsel .sv_q_imgsel:nth-child(5)`);
  });

  test(`choose empty`, async t => {
    const getPosition = ClientFunction(() =>
      document.documentElement.innerHTML.indexOf("Response required.")
    );
    let position;
    let surveyResult;

    await t.click(`input[value=Complete]`);

    position = await getPosition();
    assert.notEqual(position, -1);

    surveyResult = await getSurveyResult();
    assert.equal(typeof surveyResult, `undefined`);
  });

  test(`choose value`, async t => {
    let surveyResult;

    await t
      .click(`fieldset.sv_imgsel .sv_q_imgsel:nth-child(3)`)
      .click(`input[value=Complete]`);

    surveyResult = await getSurveyResult();
    assert.equal(surveyResult.choosepicture, "giraffe");
  });
});

frameworks.forEach((framework) => {
  fixture`${framework} ${title}`.page`${url}${framework}.html`.beforeEach(
    async (t) => {
      await initSurvey(framework, json, undefined, true);
    }
  );

  test(`click on question title state editable`, async (t) => {
    var newTitle = 'MyText';
    var json = JSON.parse(await getQuestionJson());
    var questionValue = await getQuestionValue();
    assert.equal(questionValue, undefined);

    var outerSelector = `.sv_q_title`;
    var innerSelector = `.sv-string-editor`
    await t
      .click(outerSelector)
      .typeText(outerSelector + ` ` + innerSelector, newTitle, { replace: true })
      .click(`body`, { offsetX: 0, offsetY: 0 });

    questionValue = await getQuestionValue();
    assert.equal(questionValue, undefined);
    var json = JSON.parse(await getQuestionJson());
    assert.equal(json.title, newTitle);
  });
});