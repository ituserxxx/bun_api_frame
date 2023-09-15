import * as Code from "../consts/code"
export type resp_type = {
    code: number;
    data?: any;
    msg?: string;
};
export function resp_succ(datas: object | string = ""): resp_type {
    return {
        code: Code.SUCC,
        data: datas,
    };
}
export function resp_err(msgs: string): resp_type {
    return {
        code: Code.Err,
        msg: msgs,
    };
}