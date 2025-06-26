import { notification } from "antd";
import { uploadSingleFile } from "./backend";

const uploadSingleImage = async (
    files,
    file_name
) => {
    const url = [];
    if (files?.length > 0) {
        for (let i = 0; i < files.length; i++) {
            if (files[i].url) {
                url.push(files[i].url);
                continue;
            }
            const payload = { logo: files[i].originFileObj, file_name: file_name };

            try {
                let data = await uploadSingleFile(payload);
                if(data?.fileUrl){
                    url.push(data?.fileUrl);
                } else{
                    notification.error({message: "Something went wrong!"})
                }
            } catch (e) {
                console.log(e);
            }
        }
    }

    return url;
};

export default uploadSingleImage;
