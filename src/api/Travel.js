import { apiInstance, photoInstance } from "./index.js";

const api = apiInstance();
const photoApi = photoInstance();

async function createTravel(travel, success, fail) {
  await api.post(`/apii/v1/travel`, JSON.stringify(travel)).then(success).catch(fail);
}

async function editTravel(travel, success, fail) {
  await api.put(`/apii/v1/travel`, JSON.stringify(travel)).then(success).catch(fail);
}

async function getTravel(travelId, success, fail) {
  await api.get(`/apii/v1/travel/${travelId}`).then(success).catch(fail);
}

async function listTravel(param, success, fail) {
  await api.get(`apii/v1/travel`, { params: param }).then(success).catch(fail);
}

async function uploadPhoto(form, success, fail) {
  await photoApi.post(`/apii/v3/travel/photo`, form).then(success).catch(fail);
}

export { createTravel, editTravel, getTravel, listTravel, uploadPhoto };
