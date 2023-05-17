import KeyCloakService from '../services/KeyCloakService';
import { API } from '../utils/globals';
import SUBMIT_ACTION from '../pages/Submit/model/SubmitActionEnum';

const challengeSubmission = (
  challengeName,
  repoUrl,
  repoBranch,
  description,
  submissionTags,
  dispatch
) => {
  const details = {
    f1: description,
    f2: submissionTags,
    f3: repoUrl,
    f4: repoBranch,
  };
  let formBody = [];
  for (let property in details) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
  fetch(`${API}/challenge-submission/${challengeName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      Authorization: `Bearer ${KeyCloakService.getToken()}`,
    },
    body: formBody,
  })
    .then((resp) => resp.json())
    .then((data) => {
      dispatch({ type: SUBMIT_ACTION.TOGGLE_SUBMISSION_LOADING });
      const processUrl = API.replace('/api', '');
      window.location.replace(`${processUrl}/open-view-progress/${data}#form`);
      // console.log(data);

      // fetch(`${API}/view-progress-with-web-sockets/${data}`)
      //   .then((response) => response.text())
      //   .then((data) => {
      //     console.log(data);
      //   });

      // const viewLog = () => {
      //   fetch(`${API}/view-progress-log/${data}`)
      //     .then((response) => response.text())
      //     .then((data) => {
      //       console.log(data);
      //     });
      // };

      // for (let i = 0; i < 20; i++) {
      //   setInterval(() => {
      //     viewLog();
      //   }, 1000);
      // }

      // clearInterval();
    });
};

export default challengeSubmission;
