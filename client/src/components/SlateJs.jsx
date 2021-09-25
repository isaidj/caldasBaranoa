// Import React dependencies.

import React, { useCallback, useMemo, useState } from "react";
// Import the Slate editor factory.

import { Slate, Editable, withReact } from "slate-react";
// Import the Slate components and React plugin.
import { createEditor, Transforms, Editor, Text } from "slate";

export const SlateJs = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);

  return (
    <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
      <Editable />
    </Slate>
  );
};
