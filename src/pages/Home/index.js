import axios from "axios";

import { useState, useEffect } from "react";
import { FaTrash, FaCheck, FaPen } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Home() {
  const [userAnnotation, setUserAnnotation] = useState(null);
  const [annotationList, setAnnotationList] = useState(null);

  useEffect(() => {
    (async function () {
      await axios.get("http://localhost:3001/")
        .then(({ data }) => {
          setAnnotationList(data);
        })
        .catch(err => console.log(err));
    })();
  }, [annotationList]);

  async function addAnnotation() {
    await axios.post("http://localhost:3001/add-annotation", {
      annotation: userAnnotation,
    })
      .then(() => toast.success("Anotação criada :)"))
      .catch(err => console.log(err));
  }

  async function deleteAnnotation(annotationId) {
    await axios.delete("http://localhost:3001/annotation/" + annotationId)
      .then(() => toast.info("Anotação deletada :)"))
      .catch(err => console.log(err));
  }

  async function updateAnnotation(annotationId) {
    
  }

  return (
    <div className="col-12 user-select-none">
      <div className="mt-5">
        <h2 className="text-center">Adicione suas anotações</h2>
      </div>

      <div className="col-12 row mt-3 mb-5 justify-content-center">
        <div className="col-6 row p-0">
          <input
            className="col-11 p-2"
            onChange={(e) => setUserAnnotation(e.target.value)}
            type="text"
            value={userAnnotation}
            name="annotation"
            id="annotation"
          />

          <button onClick={addAnnotation} className="col-1 add-annotation btn btn-success">
            <FaCheck />
          </button>
        </div>
      </div>

      {annotationList.length !== 0 ? (
        annotationList.map((item, index) => {
          return (
            <div key={index} className="col-12 row justify-content-center mb-3 p-0">
              <div className="col-6 row align-items-center bg-white px-0 py-3 card-annotation rounded">
                <div className="row align-items-center justify-content-between">
                  <p className="m-0 col-auto user-select-all">{item.annotation}</p>

                  <div className="col-auto row p-0">
                    <button className="bg-transparent col-auto border-0 outline-0" onClick={() => updateAnnotation(item.id)}>
                      <FaPen size={20} color="#2773e6" className="col-auto" />
                    </button>

                    <button className="bg-transparent col-auto border-0 outline-0" onClick={() => deleteAnnotation(item.id)}>
                      <FaTrash size={20} color="#e33434" className="col-auto" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="col-12 text-center" style={{ color: "#686868" }}>
          <span>Você não possui anotações :(</span>
        </div>
      )}
    </div>
  );
}
