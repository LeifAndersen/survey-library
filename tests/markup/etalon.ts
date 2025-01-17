import { settings } from "../../src/settings";

export var markupTests = [
  // Text question
  {
    name: "Test Text question markup",
    json: {
      questions: [
        {
          name: "name",
          type: "text",
          title: "Question title",
          titleLocation: "hidden"
        }
      ]
    },
    etalon: "<input aria-invalid=\"false\" aria-label=\"Question title\" aria-required=\"false\" autocomplete=\"\" class=\"sv_q_text_root\" placeholder=\"\" step=\"any\" type=\"text\">"
  },
  {
    name: "Test Text (text update mode) question markup",
    json: {
      questions: [
        {
          name: "name",
          type: "text",
          title: "Question title",
          titleLocation: "hidden"
        }
      ],
      textUpdateMode: "onTyping"
    },
    etalon: "<input aria-invalid=\"false\" aria-label=\"Question title\" aria-required=\"false\" autocomplete=\"\" class=\"sv_q_text_root\" placeholder=\"\" step=\"any\" type=\"text\">"
  },
  {
    name: "Test Text readonly question markup",
    json: {
      questions: [
        {
          name: "name",
          type: "text",
          title: "Question title",
          titleLocation: "hidden"
        }
      ],
      mode: "display"
    },
    etalon: "<input aria-invalid=\"false\" aria-label=\"Question title\" aria-required=\"false\" autocomplete=\"\" class=\"sv_q_text_root\" disabled=\"\" placeholder=\"\" step=\"any\" type=\"text\">"
  },
  {
    name: "Test Text readonly DIV question markup",
    json: {
      questions: [
        {
          name: "name",
          type: "text",
          defaultValue: "test",
          title: "Question title",
          titleLocation: "hidden"
        }
      ],
      mode: "display",
    },
    before: () => settings.readOnlyTextRenderMode = "div",
    after: () => settings.readOnlyTextRenderMode = "input",
    etalon: "<div>test</div>"
  },
  {
    name: "Test Text Date question markup",
    json: {
      questions: [
        {
          name: "birthdate",
          type: "text",
          inputType: "date",
          title: "Your birthdate:",
          isRequired: true,
          autoComplete: "bdate",
          titleLocation: "hidden"
        }
      ],
    },
    etalon: "<input aria-invalid=\"false\" aria-label=\"Your birthdate:\" aria-required=\"true\" autocomplete=\"bdate\" class=\"sv_q_text_root\" max=\"2999-12-31\" placeholder=\"\" step=\"any\" type=\"date\">"
  },
  {
    name: "Test Text Email question markup",
    json: {
      questions: [
        {
          name: "email",
          type: "text",
          inputType: "email",
          title: "Your e-mail:",
          placeHolder: "jon.snow@nightwatch.org",
          isRequired: true,
          autoComplete: "email",
          validators: [
            {
              type: "email"
            }
          ],
          titleLocation: "hidden"
        }
      ],
    },
    etalon: "<input aria-invalid=\"false\" aria-label=\"Your e-mail:\" aria-required=\"true\" autocomplete=\"email\" class=\"sv_q_text_root\" placeholder=\"jon.snow@nightwatch.org\" step=\"any\" type=\"email\">"
  },
  {
    name: "Test Text Data list markup",
    json: {

      questions: [
        {
          type: "text",
          name: "q1",
          dataList: ["abc", "def", "ghk"],
          titleLocation: "hidden"
        }
      ],
    },
    etalon: "<div><input aria-invalid=\"false\" aria-label=\"q1\" aria-required=\"false\" autocomplete=\"\" class=\"sv_q_text_root\" placeholder=\"\" step=\"any\" type=\"text\"><datalist><option value=\"abc\"></option><option value=\"def\"></option><option value=\"ghk\"></option></datalist></div>"
  },

  // Image question
  {
    name: "Test Image question markup",
    json: {
      questions: [
        {
          "type": "image",
          "name": "banner",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          "imageWidth": "500px",
          "imageHeight": "300px"
        }
      ]
    },
    etalon: "<div class=\"sv_q_image\"><img alt=\"banner\" class=\"sv_image_image\" height=\"300px\" src=\"https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg\" style=\"object-fit: contain;\" width=\"500px\"></div>"
  },
  {
    name: "Test Image Video question markup",
    json: {
      questions: [
        {
          "type": "image",
          "name": "banner",
          "imageLink": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
          "imageWidth": "500px",
          "imageHeight": "300px",
          "contentMode": "video"
        }
      ]
    },
    etalon: "<div class=\"sv_q_image\"><video class=\"sv_image_image\" controls=\"\" height=\"300px\" src=\"https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4\" style=\"object-fit: contain;\" width=\"500px\"></video></div>"
  },

  // HTML question
  {
    name: "Test HTML question markup",
    json: {
      questions: [
        {
          name: "name",
          type: "html",
          html: "HTML content here",
          title: "Question title",
        }
      ]
    },
    etalon: "<div>HTML content here</div>"
  },
  // Boolean question
  {
    name: "Test Boolean question markup",
    json: {
      questions: [
        {
          name: "name",
          type: "boolean",
          title: "Question title",
          titleLocation: "hidden"
        }
      ]
    },
    etalon: "<div class=\"sv_qcbc sv_qbln\"><label class=\"sv-boolean sv-boolean--indeterminate\"><input aria-invalid=\"false\" aria-label=\"Question title\" aria-required=\"false\" class=\"sv-visuallyhidden\" name=\"name\" type=\"checkbox\" value=\"\"><span class=\"sv-boolean__label\"><span class=\"sv-string-viewer\">No</span></span><div class=\"sv-boolean__switch\"><span class=\"sv-boolean__slider\"><span class=\"sv-hidden\"></span></span></div><span class=\"sv-boolean__label\"><span class=\"sv-string-viewer\">Yes</span></span></label></div>"
  },
  {
    name: "Test Boolean Checkbox question markup",
    json: {
      questions: [
        {
          name: "name",
          type: "boolean",
          title: "Question title",
          titleLocation: "hidden",
          renderAs: "checkbox"
        }
      ]
    },
    etalon: "<div class=\"sv_qcbc sv_qbln\"><label class=\"sv-boolean sv-boolean--indeterminate\"><input aria-invalid=\"false\" aria-label=\"Question title\" aria-required=\"false\" class=\"sv-visuallyhidden\" name=\"name\" type=\"checkbox\" value=\"\"><span class=\"sv-item__decorator sv-boolean__decorator\"><svg class=\"sv-item__svg sv-boolean__svg\" viewBox=\"0 0 24 24\"><rect class=\"sv-boolean__unchecked-path\" height=\"4\" width=\"14\" x=\"5\" y=\"10\"></rect><polygon class=\"sv-boolean__checked-path\" points=\"19,10 14,10 14,5 10,5 10,10 5,10 5,14 10,14 10,19 14,19 14,14 19,14 \"></polygon><path class=\"sv-boolean__indeterminate-path\" d=\"M22,0H2C0.9,0,0,0.9,0,2v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V2C24,0.9,23.1,0,22,0z M21,18L6,3h15V18z M3,6l15,15H3V6z\"></path></svg><span class=\"check\"></span></span><span class=\"sv-boolean__label\"><span class=\"sv-string-viewer\">Question title</span></span></label></div>"
  }

];
