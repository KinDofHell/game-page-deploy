import React from "react";
import Image from "next/image";

type SocialIconType =
  | "FACEBOOK"
  | "TWITTER"
  | "INSTAGRAM"
  | "YOUTUBE"
  | "GMAIL"
  | "NOTIFICATION";

type SocialIconProps = {
  type: SocialIconType;
  className?: string;
  color?: string;
};

const SocialIcon = ({ type, className, color = "white" }: SocialIconProps) => {
  if (type === "FACEBOOK")
    return (
      <svg
        width="8"
        height="16"
        viewBox="0 0 8 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.87662 0.525359C7.63829 0.490051 6.81737 0.419434 5.86404 0.419434C3.86911 0.419434 2.50091 1.63758 2.50091 3.87083V5.79515H0.25V8.40797H2.50091V15.1077H5.20201V8.40797H7.44409L7.78835 5.79515H5.20201V4.12682C5.20201 3.37652 5.40503 2.85572 6.49077 2.85572H7.87662V0.525359Z"
          fill={color}
        />
      </svg>
    );
  else if (type === "TWITTER")
    return (
      <svg
        width="15"
        height="12"
        viewBox="0 0 15 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.3568 1.45598C13.8449 1.67666 13.2888 1.83555 12.715 1.89733C13.3064 1.54425 13.7566 0.988142 13.9684 0.326109C13.4212 0.652711 12.8033 0.891044 12.1589 1.01462C11.6381 0.458515 10.8966 0.114258 10.0757 0.114258C8.49564 0.114258 7.22453 1.39419 7.22453 2.96542C7.22453 3.18609 7.25102 3.40677 7.29515 3.61862C4.92949 3.49504 2.81981 2.36517 1.41629 0.635058C1.16914 1.05876 1.0279 1.54425 1.0279 2.07388C1.0279 3.06251 1.53105 3.9364 2.29901 4.44837C1.83117 4.43072 1.38981 4.29831 1.01025 4.08646C1.01025 4.09529 1.01025 4.11294 1.01025 4.12177C1.01025 5.50762 1.99006 6.65515 3.29647 6.91996C3.05814 6.98175 2.80215 7.01706 2.54617 7.01706C2.3608 7.01706 2.18425 6.99941 2.00771 6.97292C2.36962 8.1028 3.42005 8.92372 4.6735 8.9502C3.69369 9.71816 2.46672 10.1683 1.13383 10.1683C0.895495 10.1683 0.674817 10.1595 0.445312 10.133C1.70759 10.9451 3.2082 11.413 4.82356 11.413C10.0669 11.413 12.9357 7.07002 12.9357 3.30085C12.9357 3.17727 12.9357 3.05369 12.9268 2.93011C13.483 2.52406 13.9684 2.02091 14.3568 1.45598Z"
          fill={color}
        />
      </svg>
    );
  else if (type === "INSTAGRAM")
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.10093 0.0489565C3.35613 0.0840966 2.8475 0.202957 2.40286 0.377678C1.94267 0.557018 1.55263 0.797679 1.16454 1.18716C0.776459 1.57664 0.537477 1.96696 0.359395 2.42784C0.187053 2.87347 0.0702921 3.38251 0.0373917 4.12773C0.0044914 4.87295 -0.00278868 5.11249 0.000851359 7.01342C0.0044914 8.91435 0.0128915 9.15263 0.0490118 9.89939C0.0845722 10.6441 0.203013 11.1525 0.377735 11.5973C0.557357 12.0575 0.797739 12.4474 1.18736 12.8356C1.57699 13.2238 1.96703 13.4623 2.42904 13.6406C2.87424 13.8127 3.38343 13.93 4.12851 13.9626C4.8736 13.9952 5.11342 14.0028 7.0138 13.9992C8.91418 13.9955 9.15344 13.9871 9.90007 13.9517C10.6467 13.9163 11.1525 13.797 11.5974 13.6231C12.0576 13.4431 12.4478 13.2031 12.8358 12.8134C13.2237 12.4236 13.4625 12.033 13.6405 11.5718C13.813 11.1266 13.9302 10.6175 13.9625 9.87293C13.9951 9.12575 14.0028 8.88719 13.9992 6.98654C13.9955 5.08589 13.987 4.84761 13.9516 4.10113C13.9162 3.35465 13.7976 2.84771 13.623 2.40264C13.4431 1.94246 13.203 1.55284 12.8135 1.16434C12.424 0.775839 12.0331 0.537138 11.5721 0.359618C11.1266 0.187277 10.6177 0.0698166 9.87263 0.0376165C9.12754 0.00541635 8.88772 -0.00284368 6.98664 0.000796331C5.08556 0.00443634 4.84756 0.0125564 4.10093 0.0489565ZM4.18269 12.7033C3.50019 12.6736 3.1296 12.5602 2.88264 12.4653C2.5556 12.3393 2.32263 12.187 2.07651 11.9433C1.83039 11.6995 1.67919 11.4657 1.55151 11.1394C1.45561 10.8924 1.3401 10.5223 1.30818 9.83975C1.27346 9.10209 1.26618 8.88061 1.26212 7.01174C1.25806 5.14287 1.2652 4.92167 1.29754 4.18373C1.32666 3.50179 1.44077 3.13079 1.53555 2.88397C1.66155 2.55651 1.81331 2.32396 2.05761 2.07798C2.30191 1.832 2.53502 1.68052 2.86164 1.55284C3.10832 1.45652 3.47849 1.342 4.16071 1.30952C4.89894 1.27452 5.12014 1.26752 6.98874 1.26346C8.85734 1.2594 9.0791 1.2664 9.81761 1.29888C10.4996 1.32856 10.8707 1.44154 11.1172 1.53688C11.4444 1.66288 11.6772 1.81422 11.9232 2.05894C12.1692 2.30366 12.3208 2.53593 12.4485 2.86325C12.545 3.10923 12.6595 3.47925 12.6917 4.16189C12.7268 4.90011 12.7348 5.12145 12.7382 6.9899C12.7415 8.85835 12.735 9.08025 12.7026 9.81791C12.6728 10.5004 12.5597 10.8711 12.4646 11.1184C12.3386 11.4453 12.1867 11.6784 11.9423 11.9242C11.6978 12.1701 11.465 12.3215 11.1382 12.4492C10.8918 12.5454 10.5213 12.6602 9.83959 12.6927C9.10136 12.7274 8.88016 12.7347 7.01086 12.7387C5.14156 12.7428 4.92106 12.7352 4.18283 12.7033M9.88929 3.25875C9.88957 3.4249 9.93911 3.58723 10.0317 3.72522C10.1242 3.86321 10.2556 3.97066 10.4092 4.03397C10.5628 4.09728 10.7318 4.11362 10.8947 4.08091C11.0576 4.04821 11.2071 3.96793 11.3244 3.85023C11.4416 3.73253 11.5214 3.58269 11.5535 3.41968C11.5856 3.25666 11.5686 3.08778 11.5047 2.9344C11.4409 2.78103 11.3329 2.65003 11.1946 2.558C11.0563 2.46596 10.8938 2.41701 10.7276 2.41734C10.5049 2.41779 10.2914 2.50668 10.1342 2.66446C9.97703 2.82225 9.88892 3.03601 9.88929 3.25875ZM3.40583 7.00698C3.40975 8.99219 5.022 10.5979 7.0068 10.5941C8.9916 10.5903 10.5984 8.97819 10.5946 6.99298C10.5908 5.00777 8.97816 3.40169 6.99308 3.40561C5.008 3.40953 3.40205 5.02205 3.40583 7.00698ZM4.66668 7.00446C4.66577 6.54296 4.80172 6.09156 5.05736 5.70733C5.313 5.3231 5.67684 5.0233 6.10286 4.84585C6.52888 4.6684 6.99796 4.62126 7.45077 4.7104C7.90358 4.79953 8.3198 5.02094 8.64677 5.34663C8.97375 5.67231 9.19681 6.08764 9.28774 6.54009C9.37867 6.99255 9.33339 7.4618 9.15763 7.88852C8.98186 8.31524 8.68351 8.68026 8.30029 8.93741C7.91707 9.19457 7.4662 9.33231 7.0047 9.33323C6.69827 9.33387 6.3947 9.27414 6.11135 9.15745C5.828 9.04076 5.57041 8.8694 5.3533 8.65315C5.13619 8.43689 4.9638 8.17999 4.84599 7.8971C4.72818 7.61422 4.66725 7.3109 4.66668 7.00446Z"
          fill={color}
        />
      </svg>
    );
  else if (type === "YOUTUBE")
    return (
      <svg
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.2103 0.358258C15.9451 0.555387 16.5237 1.13623 16.7201 1.87384C17.0769 3.21071 17.0769 6 17.0769 6C17.0769 6 17.0769 8.78926 16.7201 10.1262C16.5237 10.8638 15.9451 11.4446 15.2103 11.6418C13.8786 12 8.53846 12 8.53846 12C8.53846 12 3.19836 12 1.86661 11.6418C1.13189 11.4446 0.553211 10.8638 0.356843 10.1262C0 8.78926 0 6 0 6C0 6 0 3.21071 0.356843 1.87384C0.553211 1.13623 1.13189 0.555387 1.86661 0.358258C3.19836 1.78814e-07 8.53846 0 8.53846 0C8.53846 0 13.8786 1.78814e-07 15.2103 0.358258ZM11.2533 6.00012L6.79004 8.53246V3.46754L11.2533 6.00012Z"
          fill={color}
        />
      </svg>
    );
  else if (type === "GMAIL")
    return (
      <svg
        width="21"
        height="17"
        viewBox="0 0 21 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.29316 0.526238C4.29469 0.386147 4.35201 0.252306 4.45268 0.153779C4.55336 0.0552514 4.68925 -7.79229e-06 4.83086 1.65771e-07H16.1691C16.3106 -0.000110488 16.4463 0.0551797 16.5467 0.153787C16.6471 0.252394 16.7039 0.3863 16.7048 0.526238V3.41882L20.6403 4.46606C20.9038 4.53399 21.0568 4.82411 20.9803 5.10688L18.6128 13.8487L18.6122 16.468C18.6122 16.6091 18.5556 16.7444 18.4547 16.8442C18.3539 16.944 18.2171 17 18.0745 17H2.92316C2.78056 17 2.6438 16.944 2.54296 16.8442C2.44212 16.7444 2.38547 16.6091 2.38547 16.468V11.8966L0.0346768 5.50749C-0.0662439 5.2325 0.0607343 4.93214 0.316759 4.84007L4.29316 3.40817V0.526238ZM12.4555 2.28808L15.9697 3.22323V0.725575H5.02819V3.14349L11.3986 0.849509C11.655 0.757438 11.947 0.906797 12.0484 1.18178L12.4555 2.28808ZM18.4572 4.75895C18.3564 4.65919 18.2196 4.60314 18.077 4.60314H13.3073L12.762 3.12112L20.2198 5.10564L18.6134 11.0371L18.6147 5.13511C18.6147 4.99402 18.558 4.85872 18.4572 4.75895ZM0.792283 5.44118L2.38547 9.77125V5.13511C2.38547 5.02657 2.419 4.92144 2.48039 4.8333L0.792283 5.44118ZM11.4248 1.61241L12.5253 4.60314H3.11952L11.4248 1.61241ZM15.812 9.07206C15.783 9.08395 15.7519 9.09007 15.7206 9.09007H11.1862V7.90952H15.7206C15.7839 7.90952 15.8446 7.93439 15.8893 7.97867C15.9341 8.02295 15.9592 8.08301 15.9592 8.14563V8.85355C15.9593 8.88459 15.9531 8.91534 15.9412 8.94403C15.9292 8.97273 15.9116 8.9988 15.8895 9.02077C15.8673 9.04274 15.841 9.06017 15.812 9.07206ZM15.8892 13.5068C15.8444 13.551 15.7838 13.5758 15.7206 13.5758H11.1862V12.3952H15.7206C15.7839 12.3952 15.8446 12.4201 15.8893 12.4644C15.9341 12.5087 15.9592 12.5687 15.9592 12.6313V13.3401C15.9591 13.4026 15.9339 13.4626 15.8892 13.5068ZM16.6053 11.2634C16.5605 11.3076 16.4998 11.3325 16.4365 11.3325H11.1862V10.152H16.4365C16.4998 10.1521 16.5604 10.177 16.6052 10.2212C16.6499 10.2655 16.6751 10.3255 16.6752 10.3881V11.0964C16.6752 11.159 16.65 11.2191 16.6053 11.2634ZM9.87089 10.8075C9.87021 10.6278 9.85513 10.4484 9.8258 10.271H7.12948V11.335H8.67349C8.54609 11.9836 7.97035 12.4537 7.12948 12.4537C6.19224 12.4537 5.43368 11.6693 5.43368 10.742C5.43368 9.81478 6.1939 9.03033 7.12948 9.03033C7.53782 9.02376 7.9324 9.17632 8.22803 9.45508L9.04532 8.64649C8.52679 8.16519 7.84003 7.90122 7.12907 7.90993C6.75012 7.90542 6.37403 7.97537 6.0226 8.11573C5.67118 8.25609 5.35141 8.46406 5.08182 8.72758C4.81224 8.99111 4.5982 9.30496 4.45212 9.65093C4.30604 9.9969 4.23082 10.3681 4.23082 10.7431C4.23082 11.118 4.30604 11.4892 4.45212 11.8352C4.5982 12.1812 4.81224 12.495 5.08182 12.7585C5.35141 13.0221 5.67118 13.23 6.0226 13.3704C6.37403 13.5107 6.75012 13.5807 7.12907 13.5762C8.78351 13.5762 9.87089 12.4259 9.87089 10.8075Z"
          fill={color}
        />
      </svg>
    );
  else if (type === "NOTIFICATION")
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0V2.54545C6.31909 2.54545 11.4545 7.68091 11.4545 14H14C14 6.26818 7.73182 0 0 0ZM0 4.45455V7C3.86273 7 7 10.1373 7 14H9.54545C9.54545 8.73091 5.26909 4.45455 0 4.45455ZM1.90909 10.1818C1.40277 10.1818 0.917184 10.383 0.55916 10.741C0.201136 11.099 0 11.5846 0 12.0909C0 12.5972 0.201136 13.0828 0.55916 13.4408C0.917184 13.7989 1.40277 14 1.90909 14C2.41541 14 2.901 13.7989 3.25902 13.4408C3.61705 13.0828 3.81818 12.5972 3.81818 12.0909C3.81818 11.5846 3.61705 11.099 3.25902 10.741C2.901 10.383 2.41541 10.1818 1.90909 10.1818Z"
          fill={color}
        />
      </svg>
    );
};
export default SocialIcon;
