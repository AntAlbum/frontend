import { apiInstance, photoInstance } from "./index.js";

const api = apiInstance();
const photoApi = photoInstance();

async function createTravelInfo(travel, success, fail) {
  await api.post(`/apii/v1/travel/info`, JSON.stringify(travel)).then(success).catch(fail);
}

async function addTravelPhoto(form, success, fail) {
  await photoApi.post(`/apii/v1/travel/photo`, form).then(success).catch(fail);
}

async function editTravel(travel, success, fail) {
  await api.put(`/apii/v1/travel`, JSON.stringify(travel)).then(success).catch(fail);
}

async function getTravel(travelId, success, fail) {
  await api.get(`/apii/v1/travel/${travelId}`).then(success).catch(fail);
}

async function listTravel(userid, success, fail) {
  await api.get(`/apii/v1/travel/${userid}`).then(success).catch(fail);
}

export { createTravelInfo, addTravelPhoto, editTravel, getTravel, listTravel };
