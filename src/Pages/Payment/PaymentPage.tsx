import React from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('TEST-680ea04b-a3ca-4aac-9034-6c48f9056a9c');

const PaymentPage = () => { 



return  ( 
    <div id="wallet_container"></div>
    
    );
    <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} />
};

<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} />

export default PaymentPage;