import React, { useState, useEffect } from "react";
import { Fab, TextareaAutosize } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";
import QrScan from "react-qr-reader";

function QrScanner() {
  const [qrscan, setQrscan] = useState("No result");

  useEffect(() => {
    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        {
          video: true,
        },
        function (localMediaStream) {},
        function (err) {
          alert("A ocurrido un error tratando de acceder a la camara: " + err);
        }
      );
    } else {
      alert("Lo sentimos, el navegador no soporta la camara del dispositivo");
    }
  }, []);

  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <Link to="/">
        <Fab style={{ marginRight: 10 }} color="primary">
          <ArrowBack />
        </Fab>
      </Link>
      <span>QR Scanner</span>

      <center>
        <div style={{ marginTop: 30 }}>
          <QrScan
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ height: 240, width: 320 }}
          />
        </div>
      </center>

      <TextareaAutosize
        style={{ fontSize: 18, width: 320, height: 100, marginTop: 100 }}
        rowsMax={4}
        defaultValue={qrscan}
        value={qrscan}
      />
    </div>
  );
}

export default QrScanner;
