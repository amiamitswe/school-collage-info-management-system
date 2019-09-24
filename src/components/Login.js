import React from 'react';
import { TextInput, Button , Icon} from 'react-materialize';
//import { Icon } from 'material-icons-react';
import styles from '../scss/App.module.scss';

const Login = () => {
    return (
        <div className={styles.login}>

            <h3>Welcome to Login Portal</h3>
            <div className={styles.login_form}>
                <TextInput
                    email
                    validate
                    label="Email"
                    error="Wrong Email sir"
                    success="Great"
                    icon={<Icon>email</Icon>}
                />
                <TextInput
                    password
                    icon={<Icon>remove_red_eye</Icon>}
                    label="Password"
                />

                <Button
                    className={styles.login_button}
                    node="a"
                    waves="light"
                    large
                    tooltip="Click for Login "
                    style={{ marginRight: '5px' }}
                    tooltipOptions={{ position: 'top' }}>
                    Login Now
                    <Icon right>
                        send
                    </Icon>
                </Button>

            </div>
        </div>
    );
};

export default Login;

