import * as resp from "../middleware/respone_format"
import { execSql } from "../mysql/init"
export default class UserClass {

    public async index(req: Request): Promise<resp.resp_type> {
        try {
            const sql = 'SELECT * FROM school_code where code = 1';
            let data = await execSql(sql);
            return resp.resp_succ(data);
        } catch (error) {
            return resp.resp_err(JSON.stringify(error))
        }
    }
    public async add(req: Request): Promise<resp.resp_type> {
        try {
            const sql = "INSERT INTO `school_code` (`code`, `school_name`) VALUES ('444', 'yyyy')";
            let data = await execSql(sql);
            return resp.resp_succ(data);
        } catch (error) {
            return resp.resp_err(JSON.stringify(error))
        }
    }

    public async list(req: Request): Promise<resp.resp_type> {
        try {
            const sql = 'SELECT * FROM school_code';
            let data = await execSql(sql);
            return resp.resp_succ(data);
        } catch (error) {
            return resp.resp_err(JSON.stringify(error))
        }
    }
    public async delete(req: Request): Promise<resp.resp_type> {
        try {
            const sql = "DELETE FROM `school_code` WHERE `code` = '1' ";
            let data = await execSql(sql);
            return resp.resp_succ(data);
        } catch (error) {
            return resp.resp_err(JSON.stringify(error))
        }
    }
}


