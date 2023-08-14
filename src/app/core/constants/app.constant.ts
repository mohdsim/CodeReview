import * as moment from "moment";

export function compareTwoDate(stDate: string, enDate: string) {
    const startDate = moment(stDate, 'DD/MM/YYYY');
    const endDate = moment(enDate, 'DD/MM/YYYY');
    if (startDate.isSameOrAfter(endDate)) {
        return false;
    }
    return true
}