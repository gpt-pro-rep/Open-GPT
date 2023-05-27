import axios from "axios";
import { showModal, showToast } from "../components/ui-lib";
import { IconButton } from "../components/button";
import {siteDesc} from '../config/siteDesc'
const siteDescConfig:any = siteDesc(location.hostname)

const baseUrl =
  siteDescConfig.apiUrl ||
  "https://fc-mp-fa7d97b0-49d8-409e-a902-fbfa876d91b0.next.bspapp.com";

export const trial = async () => {
  let accessControl: any = localStorage.getItem("access-control") || "{}";
  let notMind: any = localStorage.getItem("not-mind");

  accessControl = JSON.parse(accessControl);
  if (
    accessControl &&
    accessControl.state &&
    !accessControl.state.accessCode &&
    !notMind
  ) {
    let res = await axios.get(baseUrl + "/api/trial");
    if (res.data.code == 0) {
      showModal({
        title: "系统提示",
        children: (
          <div className="markdown-body">
            <p
              style={{
                textAlign: "center",
                padding: "10px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              免费试用提醒
            </p>
            <p style={{ textAlign: "center" }}>
              {" "}
              🎉 点击下方领取按钮，免费领取试用额度 🎉{" "}
            </p>
            <br />
          </div>
        ),
        actions: [
          <IconButton
            key="trialnotmind"
            text={"稍后提示"}
            onClick={() => {
              // localStorage.setItem("not-mind", "true");
              closeModal();
            }}
          />,
          <IconButton
            type="primary"
            key="trialtry"
            bordered
            text={"免费领取"}
            onClick={() => trialset()}
          />,
        ],
      });
    } else {
      localStorage.setItem("trialsize", res.data.trialsize);
      if (res.data.trialsize == 0) {
        // localStorage.removeItem("not-mind");
        localStorage.removeItem("trialsize");
        showToast(
          "您的试用额度已经用完。如需继续使用，请「微信扫码」获取长久额度。",
          undefined,
          5000,
        );
      }
    }
  }
};

const closeModal = () => {
  let modal = document.querySelector(".modal-mask");
  if (modal) {
    modal.remove();
  }
};

const trialset = () => {
  axios.get(baseUrl + "/api/trialset").then((res: any) => {
    if (res.data.code == 1) {
      showToast("领取成功，请直接开始会话！", undefined, 5000);
      localStorage.setItem("trialsize", res.data.trialsize);
      closeModal();
    }
  });
};

export const trialupdate = () => {
  return axios.get(baseUrl + "/api/trialupdate").then((res) => {
    if (res.data.code == 1) {
      localStorage.setItem("trialsize", res.data.trialsize);
    }
  });
};
