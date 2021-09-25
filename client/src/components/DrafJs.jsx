import React, { useCallback, useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromRaw,
  convertFromHTML,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import styled from "styled-components";

const DrafJs = ({ text, tipoToolbar, reset, value }) => {
  // console.log(value);
  const [editorState, setEditorState] = useState(
    value
      ? EditorState.createWithContent(
          ContentState.createFromBlockArray(htmlToDraft(value))
        )
      : EditorState.createEmpty()
  );

  const resetEditor = useCallback(() => {
    setEditorState(
      EditorState.push(editorState, ContentState.createFromText(""))
    );
  }, [editorState]);

  const onEditorStateChange = useCallback(
    (editorState) => {
      setEditorState(editorState);
      text(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    },
    [editorState]
  );

  if (tipoToolbar === "subtitulo") {
    return (
      <SubtituloContainer>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          placeholder="Subtitulo..."
          stripPastedStyles={true}
          toolbar={{
            options: [
              "inline",
              "fontSize",

              "fontFamily",
              "list",
              "textAlign",
              "history",
              "remove",
            ],
            inline: { inDropdown: false },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            remove: { inDropdown: true },

            fontFamily: {
              options: ["Georgia"],
              inDropdown: true,
            },
          }}
        />
      </SubtituloContainer>
    );
  } else if (tipoToolbar === "cuerpo") {
    return (
      <CuerpoContainer>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          stripPastedStyles={true}
          placeholder="Escribe aquí..."
        />
      </CuerpoContainer>
    );
  } else {
    return (
      <SubtituloContainer>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          placeholder="Escribe aquí..."
        />
      </SubtituloContainer>
    );
  }
};

export default DrafJs;

const DefaultContainer = styled.div`
  border: 1px solid #aaaaaa;

  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;

  .editorClassName {
    border: 1px solid #aaaaaa;
    border-radius: 10px;
    padding: 10px;
    min-height: 200px;
    height: auto;
  }
`;
//SubtituloContainer inherit from DefaultContainer
const SubtituloContainer = styled(DefaultContainer)`
  .editorClassName {
    min-height: 100px;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 1.35em;
    font-weight: 100;
  }
`;
const CuerpoContainer = styled(DefaultContainer)``;
