import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receivePolls } from '../actions/polls'
import { setAuthedUser} from '../actions/authedUser'
import { dispatch } from 'rxjs/internal/observable/range';

const AUTHED_ID = 'tylermcginnis'

export const handleInitialData = () => {
    return (dispatch) => {
        return getInitialData()
        .then(({ users, polls}) => {
            dispatch(receiveUsers(users))
            dispatch(receivePolls(polls))
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}