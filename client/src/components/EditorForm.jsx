// This sample assumes that the application is using a CKEditor 5 editor built from source.

import React, { Component, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import styled from "styled-components";

const EditorForm = ({ text }) => {
  const [editorData, setEditorData] = useState("");
  const urlimage = "https://i.imgur.com/2Y9zZ8H.jpg";

  return (
    <div className="">
      <CKEditor
        editor={ClassicEditor}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          // setEditorData(data);
          text(data);
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default EditorForm;

const EditorFormStyled = styled.div``;
