import http from "~/src/http-common";

class UploadFilesService {
  upload(inscripcion_id, tipo, file, phone, cuit, email, nombre_apellido, onUploadProgress) {
    let formData = new FormData();

    formData.append("inscripcion_id", inscripcion_id);
    formData.append("tipo", tipo);
    formData.append("file", file);
    formData.append("cel", phone);
    formData.append("cuit", cuit);
    formData.append("email", email);
    formData.append("nombre_apellido", nombre_apellido);

    return http.post("/postulante", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }
  upload_licitaciones(tipo,
    decreto, anio, precio_pliego, org_financiero, presup_oficial, fecha_apertura, llamada, numero, titulo, estado, pliego, bases, onUploadProgress) {
    let formData = new FormData();

    formData.append("pliego", pliego);
    formData.append("bases", bases);
    formData.append("numero", numero);
    formData.append("estado", estado);
    formData.append("titulo", titulo);
    formData.append("llamada", llamada);
    formData.append("tipo", tipo);
    formData.append("decreto", decreto);
    formData.append("anio", anio);
    formData.append("fecha_apertura", fecha_apertura);
    formData.append("presup_oficial", presup_oficial);
    formData.append("precio_pliego", precio_pliego);
    formData.append("org_financiero", org_financiero);

    return http.post("/licitaciones", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }
  getFiles() {
    return http.get("/upload");
  }

  create(data) {
    return http.post("/users", data);
  }
}

export default new UploadFilesService();
