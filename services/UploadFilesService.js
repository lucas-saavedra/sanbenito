import http from "~/src/http-common";

class UploadFilesService {
  upload(inscripcion_id,tipo,file,phone,cuit,email,nombre_apellido,onUploadProgress) {
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

  getFiles() {
    return http.get("/upload");
  }
  
  create(data) {
    return http.post("/users", data);
  }
}

export default new UploadFilesService();
