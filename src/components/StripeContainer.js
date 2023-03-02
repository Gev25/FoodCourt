import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51MdxMjFl4NxO0Waen8bkcwGO9ZqfnF0AwaegaU1YQxVzqjn2cOlVa4Qzbg31shhEdaBBdRBZ303G7dkPfqlF4Oaz008cbWc4I1"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}