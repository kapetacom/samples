import React from 'react';
import { useAutoUpdater } from '../hooks/autoUpdaterHook';
import {useTestClient} from "../.generated/clients/TestClient";

export const Main = () => {
    useAutoUpdater();

    const [testResult, setTestResult] = React.useState<number>(-1)
    const testClient = useTestClient()

    return (
        <div>
            <h1>Result from backend</h1>
            <p>Value: {testResult}</p>

            <button
                onClick={() => {
                    testClient.getNext().then((result) => {
                        setTestResult(result?.next ?? -1)
                    }).catch((e) => {
                        console.error(e)
                    })
                }}
            >
                Call backend
            </button>
        </div>
    );
};
