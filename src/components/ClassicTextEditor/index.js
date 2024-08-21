import * as React from "react";
import "./index.scss";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

 const ClassicTextEditorr = ()=> {
  return (
    <div className="add-menu-input w-1/2 mb-5">
      <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
        }}
        onChange={(event) => {
          // console.log(event);
        }}
        onBlur={(event, editor) => {
          // console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          // console.log("Focus.", editor);
        }}
      />
    </div>
  );
}
export default ClassicTextEditorr;