import {NavBarIcon} from "../NavBarIcon";

const CartIcon = ({checked}: NavBarIcon) => {

    return (
        <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4 7.89594V6.96783C4 6.38776 4.3984 6.00492 5.04342 6.00492H6.23229L8.64798 2.26349C8.83769 1.97345 9.1855 1.94445 9.44477 2.07207C9.7167 2.20548 9.86847 2.49551 9.67243 2.80295L7.66779 6.00492H15.3259L13.3212 2.80295C13.1315 2.49551 13.2833 2.20548 13.5552 2.07207C13.8208 1.95025 14.1686 1.97926 14.352 2.26349L16.7614 6.00492H17.9503C18.589 6.00492 19 6.38776 19 6.96783V7.89594C19 8.4644 18.6143 8.82404 18.0008 8.84725L17.0649 12.9715C16.8689 13.83 16.4009 14.6595 14.8769 14.6595H8.1231C6.59275 14.6595 6.12479 13.83 5.92875 12.9715L4.99916 8.84725C4.37943 8.82985 4 8.4644 4 7.89594ZM5.33432 7.05484C5.20784 7.05484 5.13828 7.12445 5.13828 7.24046V7.61751C5.13828 7.73352 5.20784 7.80313 5.33432 7.80313H17.6594C17.7795 7.80313 17.8554 7.73352 17.8554 7.61751V7.24046C17.8554 7.12445 17.7795 7.05484 17.6594 7.05484H5.33432ZM8.30649 13.6038H14.6872C15.5978 13.6038 15.8255 13.3254 15.9962 12.5829L16.8373 8.84725H6.16273L6.99747 12.5829C7.16821 13.3254 7.40219 13.6038 8.30649 13.6038ZM10.6147 12.9889C10.368 13.0063 10.1847 12.8671 10.172 12.6525L9.97597 9.73475C9.96332 9.52013 10.1277 9.36931 10.3744 9.35771C10.6273 9.3345 10.7981 9.47952 10.8107 9.69415L11.0131 12.6119C11.0257 12.8207 10.8613 12.9773 10.6147 12.9889ZM12.3917 12.9889C12.145 12.9773 11.9806 12.8207 11.9933 12.6119L12.1893 9.69415C12.2019 9.47952 12.379 9.3345 12.632 9.35771C12.8786 9.36931 13.043 9.52013 13.0304 9.73475L12.828 12.6525C12.8153 12.8671 12.632 13.0063 12.3917 12.9889ZM8.80607 13.0295C8.55312 13.0643 8.36341 12.9483 8.32546 12.7395L7.80059 9.78116C7.76265 9.57813 7.90809 9.40991 8.15472 9.36931C8.40135 9.3345 8.59739 9.45632 8.63533 9.65934L9.15388 12.6177C9.19182 12.8207 9.0527 12.9889 8.80607 13.0295ZM14.1939 13.0295C13.941 12.9889 13.8019 12.8207 13.8461 12.6177L14.3583 9.65934C14.4026 9.45632 14.5987 9.3345 14.839 9.36931C15.0919 9.40991 15.2374 9.57813 15.1994 9.78116L14.6745 12.7395C14.6366 12.9483 14.4406 13.0643 14.1939 13.0295Z"
                fill={checked ? '#549E83' : '#EBEBEB'}/>
            <path
                d="M8.09703 22C6.94437 22 6.22576 21.2354 6.22576 20.0093V20.004C6.22576 18.7754 6.9415 18.0107 8.09415 18.0107C9.00822 18.0107 9.70959 18.5407 9.81882 19.2974L9.81594 19.3106H9.17782V19.3027C9.05709 18.836 8.6403 18.5328 8.09415 18.5328C7.34967 18.5328 6.88401 19.0997 6.88401 20.004V20.0093C6.88401 20.9111 7.34967 21.4779 8.09703 21.4779C8.64605 21.4779 9.05709 21.209 9.17494 20.7792L9.18069 20.7687H9.81882V20.7845C9.69809 21.5149 9.0226 22 8.09703 22Z"
                fill={checked ? '#549E83' : '#EBEBEB'}/>
            <path
                d="M11.3102 21.9552C10.7152 21.9552 10.2754 21.623 10.2754 21.1035V21.0983C10.2754 20.5867 10.6951 20.2888 11.4396 20.2466L12.2847 20.2018V19.9487C12.2847 19.6349 12.0691 19.4609 11.6465 19.4609C11.3016 19.4609 11.0745 19.5769 10.9998 19.7799L10.9969 19.7905H10.3961L10.399 19.772C10.4738 19.3027 10.9653 18.9889 11.6753 18.9889C12.46 18.9889 12.9027 19.3475 12.9027 19.9487V21.9077H12.2847V21.5017H12.2358C12.0518 21.7917 11.7241 21.9552 11.3102 21.9552ZM10.8963 21.0798C10.8963 21.3435 11.1406 21.499 11.4769 21.499C11.9426 21.499 12.2847 21.2195 12.2847 20.8504V20.6052L11.5229 20.65C11.0918 20.6738 10.8963 20.8161 10.8963 21.0745V21.0798Z"
                fill={checked ? '#549E83' : '#EBEBEB'}/>
            <path
                d="M13.641 21.9077V19.0443H14.2647V19.4767H14.3107C14.4228 19.1735 14.7131 18.9942 15.1299 18.9942C15.2305 18.9942 15.3398 19.0074 15.403 19.0206V19.5479C15.2909 19.5268 15.1845 19.5136 15.0667 19.5136C14.5895 19.5136 14.2647 19.7826 14.2647 20.1965V21.9077H13.641Z"
                fill={checked ? '#549E83' : '#EBEBEB'}/>
            <path
                d="M17.0985 21.9262C16.4115 21.9262 16.1298 21.7047 16.1298 21.1536V19.4952H15.6411V19.0443H16.1298V18.3218H16.765V19.0443H17.4348V19.4952H16.765V21.0165C16.765 21.325 16.8915 21.4516 17.1991 21.4516C17.2939 21.4516 17.3486 21.4489 17.4348 21.441V21.8972C17.3342 21.913 17.2192 21.9262 17.0985 21.9262Z"
                fill={checked ? '#549E83' : '#EBEBEB'}/>
        </svg>

    )
}

export default CartIcon;
