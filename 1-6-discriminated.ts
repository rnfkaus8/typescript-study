{
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        };
    };
    type FailState = {
        result: 'fail';
        reason: string;
    };
    type LoginState = SuccessState | FailState

    function loginSuccess(id: string, password: string): LoginState {
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            }
        }
    }

    function printLoginState(state: LoginState) {
        if (state.result === 'success') {
            console.log(`welcome!! ${state.response.body}`);
            return;
        }
        console.log(`sry... ${state.reason}`);
    }

    printLoginState(loginSuccess('id', 'pwd'));

}
