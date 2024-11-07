import React from 'react';
import "./ForexAfterLoss.css";

function ForexAfterLoss() {
    const afterLoss = [
        "It is mandatory to inform the issuer about the theft or loss of the traveller cheques within a day or 24 hours, and also give the police complete details about the circumstances how this incident took place and get a report that should have reasonable information.",
        "While claiming the refund for a theft or misplaced traveller cheque, you have to provide a valid ID proof and the copy of purchase receipt of the PAFF.",
        "You have to provide prescribed documents for refund claim with complete satisfaction and attest them in full faith.",
        "You should give your full support during investigation procedure of the theft or loss of cheques, and also in ultimate prosecution as well."
    ]
    const beforeLoss = [
        "When you receive the traveller cheques from the issuing agency, instantly upon receipt, sign each and every cheque on the column for “Signature of the Holder”, but make sure to not to countersign any of these cheques.",
        "You should protect every cheque from theft or loss same way as you protect your cash.",
        "You should not use these cheques as a collateral security.",
    ]
    return (
        <div className="afterloss-beforeloss-parent">
            <div className="forex-after-loss">
                <h4>After Loss</h4>
                {afterLoss?.map((val, id) => {
                    return <ul>
                        <li>{val}</li>
                    </ul>
                })}
            </div>
            <div className="forex-after-loss">
                <h4>Before Loss</h4>
                {beforeLoss?.map((val, id) => {
                    return <ul>
                        <li>{val}</li>
                    </ul>
                })}
            </div>
        </div>
    )

}

export default ForexAfterLoss