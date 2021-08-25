function createAccount(pin, amount) {
    let pinNum = pin;
    let balance = amount || 0;
    return {
        checkBalance(enterPin) {
            //display invalid if pin does not match
            if (enterPin !== pinNum) return 'Invalid PIN.';
            //if match, display the balance
            return `$${balance}`;
        },
        deposit(enterPin,depositAmt) {
            //display invalid if pin does not match
            if (enterPin !== pinNum) return 'Invalid PIN.';
            balance += depositAmt;
            return `Succesfully deposited $${depositAmt}. Current balance: $${balance}.`
        },
        withdraw(enterPin,wdrawAmt) {
            //display invalid if pin does not match
            if (enterPin !== pinNum) {
                return 'Invalid PIN.'
            }
            else {
                if ((balance - wdrawAmt) < 0) {
                    return 'Withdrawal amount exceeds account balance. Transaction cancelled.'
                } else {
                    balance -= wdrawAmt;
                    return `Succesfully withdrew $${wdrawAmt}. Current balance: $${balance}.`
                }
            }
        },
        changePin(oldPin, newPin) {
            if (oldPin !== pinNum) return 'Invalid PIN.'
            
            //if valid pin, update to the new pin
            pinNum = newPin;
            return "PIN successfully changed!";
        }
    }
}

module.exports = { createAccount };
