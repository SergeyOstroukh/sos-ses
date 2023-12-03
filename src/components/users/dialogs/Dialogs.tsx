import {useGetAllDialogsQuery} from "../../../services/dialogsApi.ts";

export const Dialogs = () => {

    const {data} = useGetAllDialogsQuery({})
    console.log(data)
    return (
        <div>

        </div>
    );
};
