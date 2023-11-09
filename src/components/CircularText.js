import * as React from "react"
// const CircularText = ({className, ...rest}) => (
//     <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="496"
//     height="496"
//     viewBox="0 0 496 496"
//     xmlSpace="preserve"
//     className={`w-full h-auto ${className}`}
//     {...rest}
//   >
//     <path
//       fill="#222"
//       d="m202 401 9 2 3 20c3.396-5.634 6.763-11.273 10-17 1.48.14 2.959.288 4.438.438l2.496.246C233 407 233 407 234 408c.3 1.9.54 3.81.754 5.723l.4 3.572.409 3.767.42 3.686c.674 6.121 1.194 12.094 1.017 18.252-7.875-.875-7.875-.875-9-2a80.603 80.603 0 0 1-.316-4.691l-.127-2.862-.12-3.01-.13-3.021c-.107-2.472-.209-4.944-.307-7.416-3.177 2.91-5.143 5.748-7.125 9.563-1.534 2.928-3.039 5.683-4.875 8.437-4.054.431-5.55.3-9-2a86.39 86.39 0 0 1-1.125-8.438c-.491-5.863-.491-5.863-1.875-11.562l-1.137 2.16c-2.979 5.576-6.052 10.796-9.863 15.84a108.817 108.817 0 0 1-7-1l-1-2a83.777 83.777 0 0 1 3.332-6.25l1.066-1.86a784.12 784.12 0 0 1 2.253-3.894 974.286 974.286 0 0 0 3.437-5.965l2.182-3.781 1.038-1.806c1.414-2.42 2.7-4.452 4.692-6.444Z"
//     />
//     <path
//       fill="#2C2C2C"
//       d="M91 274c3.028 2.344 4.319 4.22 4.938 7.938.178 2.669.006 4.257-.75 6.875C91.791 292.207 87.64 293.098 83 294h-4l2 10 3.395-1.313L88.813 301l2.236-.867 2.158-.82 1.984-.762C97 298 97 298 100 298c1.132 2.397 1.992 4.348 2.023 7.02C101 307 101 307 97.691 308.309a239.3 239.3 0 0 1-6.232 1.67c-2.293.616-2.293.616-5.459 2.021-1.36 2.513-1.36 2.513-2 5-2.625.813-2.625.813-5 1l-1-3-2.625.688c-4.14.383-5.933-.42-9.375-2.688-2.633-3.35-2.158-6.882-2-11h6l.813 1.938C71.886 306.33 71.886 306.33 75 307l-4-10h-6l-1-8 6-1-1-7 6-1 1 6 11-3-.25-2.813C87 277 87 277 89 275.125L91 274Z"
//     />
//     <path
//       fill="#222"
//       d="M131.188 114.688c4.823 3.965 7.513 8.263 8.125 14.5C138.49 139.21 130.959 146.36 124 153l-3 1v-2l-1.766-.77c-2.476-1.363-4.04-2.872-5.984-4.917-5.073-5.206-10.396-10-16.25-14.313 3.78-8.126 11.047-15.766 19.5-18.938 5.543-1.58 9.562-1.088 14.688 1.626ZM113 124c-2.275 2.572-2.275 2.572-4 5a158.814 158.814 0 0 0 5 6h2l.75 1.813c1.414 2.473 2.9 3.62 5.25 5.187 4.813-2.01 6.883-5.353 9-10 .079-3.379-.896-4.817-2.563-7.75-2.889-2.667-4.635-3.14-8.48-3.383-3.03.206-4.643 1.204-6.957 3.133Z"
//     />
//     <path
//       fill="#232323"
//       d="M409 264c7.771.501 15.122 1.744 22.688 3.563l3.029.708c2.43.57 4.857 1.146 7.283 1.729-.45 9.036-.988 19.7-7 27-4.972 3.833-9.018 4.694-15.277 4.453-5.525-.92-9.323-3.601-12.66-8.015-3.231-7.413-2.117-14.29-.063-21.875l.578-2.217c.467-1.784.943-3.565 1.422-5.346Zm5 9c-1.827 8.272-1.827 8.272.875 15.938 2.923 2.837 3.764 3.027 7.938 3.437 3.326-.066 4.159-.356 7.062-2.313 2.696-3.885 3.45-7.438 4.125-12.062-4.414-1.562-8.792-2.674-13.375-3.625-1.245-.26-2.49-.52-3.773-.79L414 273Z"
//     />
//     <path
//       fill="#252525"
//       d="m367 349 2 6-1.898.883c-5.396 2.596-5.396 2.596-8.664 7.43L358 366l1 1 1.215-1.715c3.066-3.956 5.27-6.747 10.41-7.41 5.117-.104 7.993 1.173 12.188 4.063 2.805 3.927 2.957 6.588 2.746 11.335-1.24 6.049-5.81 9.244-10.559 12.727a130.152 130.152 0 0 0-4 5c-4.28-.476-6.194-2.914-9-6l-2-2.563c-1.901-2.526-1.901-2.526-4.5-4.25-3.793-3.318-6.154-7.16-6.734-12.238.264-4.863 2.17-7.925 5.484-11.406 3.964-3.495 7.319-5.543 12.75-5.543Zm-.375 19.125c-1.924 2.798-1.924 2.798-1.438 6.125.542 2.638.542 2.638 1.813 3.75 4.66.424 4.66.424 8.938-1.125 1.566-2.765 1.452-4.757 1.062-7.875-1.063-1.98-1.063-1.98-3-3-3.613-.741-4.601-.357-7.375 2.125Z"
//     />
//     <path
//       fill="#272727"
//       d="M65 233c6.452 1.064 12.366 2.714 18.457 5.098 2.506.889 4.927 1.446 7.543 1.902l1 9-13 6 5.938 1.938c5.937 1.937 5.937 1.937 7.062 3.062.141 2.67.042 5.324 0 8-5.154 2.735-10.41 5.062-15.813 7.25l-1.994.819C71.303 277.224 69.143 278 66 278v-8l14-6-15-5v-7l2.082-1.023 2.73-1.352 2.708-1.336c2.626-1.308 2.626-1.308 5.48-3.289l-13-4v-8Z"
//     />
//     <path
//       fill="#262626"
//       d="M152 373c3.544 1.73 6.218 4.218 9 7a374.137 374.137 0 0 0 6 4c-1.287 4.611-2.983 7.333-6 11-2.062 2.693-4.092 5.41-6.125 8.125l-1.629 2.168-1.566 2.09-1.415 1.887c-1.13 1.546-2.202 3.136-3.265 4.73-2.915-1.074-4.778-1.778-7-4 .266-3.851 2.56-6.167 5-9l-1.645-.734-2.167-1.016-2.145-.984c-2.445-1.515-3.612-2.767-5.043-5.266-.884-4.86-1.166-9.897 1.277-14.305 4.884-5.754 9.268-6.72 16.723-5.695Zm-8.375 9.563c-2.005 2.471-2.005 2.471-1.375 6.187L143 392c2.719 1.38 2.719 1.38 6 2 3.01-1.341 3.01-1.341 5-4 .533-3.265.598-5.055-1.188-7.875-3.468-2.153-5.85-1.758-9.187.438Z"
//     />
//     <path
//       fill="#252525"
//       d="M385 112c3.83 1.453 5.12 3.429 7 7a3499.254 3499.254 0 0 1-5.188 4.75l-2.917 2.672C381 129 381 129 378.188 131.094c-2.568 1.854-2.568 1.854-3 5.656L375 140c2.112 1.956 3.323 2.981 6.25 3.063 7.226-2.792 13.064-8.952 18.75-14.063 3.844 1.672 3.844 1.672 5.25 4.625L406 136a140.865 140.865 0 0 1-12 11l-1.758 1.457c-3.97 3.09-7.045 4.634-12.242 4.543-6.903-2.138-10.869-6.222-14.375-12.438-1.022-4.191-.677-7.532 1.328-11.402 4.697-6.918 11.602-11.958 18.047-17.16Z"
//     />
//     <path
//       fill="#212121"
//       d="M264 64c2.939.178 5.826.431 8.75.75l2.46.227c5.571.598 9.34 1.748 13.54 5.648 2.287 4.345 2.945 8.865 1.625 13.633-1.567 3.538-2.965 5.444-6.125 7.742-5.67 1.745-9.814 1.718-15.25-1l-2 10-8-1c-.254-7.68.721-14.925 1.938-22.5l.552-3.61c1.374-8.754 1.374-8.754 2.51-9.89Zm8.313 10.063c-2.693 2.797-2.693 2.797-2.313 6.624.694 3.568.694 3.568 4 5.313 2.752-.206 4.502-.674 6.813-2.188 1.817-2.774 1.716-4.575 1.187-7.812-4.5-4.502-4.5-4.502-9.688-1.938Z"
//     />
//     <path
//       fill="#262626"
//       d="m431 179 1 7c-7.185 3.131-14.361 5.268-22 7-1.017 4.778-1.017 4.778-.063 9.438L411 204c6.04.271 10.687-.526 16.375-2.5 7.446-2.5 7.446-2.5 9.625-2.5l2 9c-23.636 8.154-23.636 8.154-31.043 5.18-4.415-2.604-6.281-5.892-7.582-10.778-.876-5.61-.528-9.602 2.563-14.425 3.53-4.008 8.103-5.308 13.062-6.915l2.695-.955c4.618-1.56 7.484-2.366 12.305-1.107Z"
//     />
//     <path
//       fill="#2B2B2B"
//       d="M441 215c.5 3.458.68 6.56 0 10-2.307 2.879-4.951 4.945-8 7l2.152.996c7.418 3.839 7.418 3.839 8.735 7.406.216 2.245.283 4.35.113 6.598-5.605-.712-9.507-3.678-14.16-6.7-2.648-1.564-2.648-1.564-4.863-.823-3.705 2.855-7.024 6.098-10.418 9.308C412 251 412 251 409 252c-.492-3.78-.686-7.237 0-11 2.284-2.935 4.9-4.972 8-7-2.213-2.437-3.44-3.19-6.625-4.563-1.855-.988-1.855-.988-3.375-2.437-.91-3.34-1.046-6.549-1-10 5.152 1.882 9.594 4.69 14.258 7.54 2.665 1.695 2.665 1.695 5.742 1.46a116.447 116.447 0 0 0 6-5.5c5.595-5.5 5.595-5.5 9-5.5Z"
//     />
//     <path
//       fill="#282828"
//       d="M119 339c5.377 3.45 9.07 7.925 10.5 14.191.313 2.184.313 2.184.5 5.809-1 1-1 1-4.063 1.063L123 360l-.77-2.082-1.043-2.73-1.019-2.708c-1.158-2.46-1.978-3.884-4.168-5.48h-4l1.129 2.527c5.398 12.84 5.398 12.84 2.871 19.473-1.7 2.363-2.603 2.925-5.488 3.469-4.691.052-7.723-.03-11.887-2.344-3.534-3.596-6.068-8.361-7.625-13.125.371-2.309.371-2.309 1-4l6-1 .953 2.117 1.297 2.758 1.266 2.742c1.608 2.583 2.676 3.34 5.484 4.383.873-2.438 1.145-3.613.223-6.078l-1.16-2.172c-2.184-4.618-2.752-7.665-2.063-12.75 4.308-5.6 8.494-5.58 15-4ZM153 96c4.652 2.37 6.293 4.167 8 9l-2.082 1.645-2.73 2.168-2.708 2.144c-1.95 1.607-3.743 3.213-5.48 5.043 5.25-1.01 5.25-1.01 8.938-4.625L158 109l6 1c-.454 4.878-1.522 7.522-5 11-4.802 3.238-9.358 3.91-15 3-4.383-2.191-7.167-4.417-9-9-.82-4.843-.61-8.71 2.125-12.875 4.32-5.23 9.144-6.966 15.875-6.125Zm-10 9.813c-1.346 2.286-1.346 2.286 0 5.187 1.503-.975 3.002-1.955 4.5-2.938l2.531-1.652L152 105v-1c-4.937-.55-4.937-.55-9 1.813Z"
//     />
//     <path
//       fill="#2B2B2B"
//       d="M105 160c-1.895 6.518-4.518 12.178-8 18l5-1 2-11 7-1c.587 8.102-.373 12.466-5.5 18.875-3.678 2.758-8.076 2.43-12.5 2.125-4.158-1.6-6.712-3.147-9-7-1.44-4.319-1.468-8.214-.313-12.625C88.44 157.777 96.255 155.76 105 160Zm-13 6c-2.367 2.848-2.367 2.848-1.625 6.188L91 175c3.254-2.834 4.52-4.686 5-9h-4Z"
//     />
//     <path
//       fill="#2A2A2A"
//       d="M206 71c3.91 2.246 6.071 4.939 8 9v4l-17 5c1.098 1.312 1.098 1.312 3.813 1.25 3.565-.28 4.448-1.15 7.187-3.25 2.352.277 3.887.943 6 2-.543 3.801-2.073 5.575-5 8-5.369 1.767-11.386 1.511-16.875.438-3.195-2.162-4.834-4.885-6.125-8.438-.662-3.882-.392-7.092 1.188-10.75C192.6 71.53 197.667 70.054 206 71Zm-12 10v3l10-3-1-3c-4.033-.336-6.098.098-9 3Z"
//     />
//     <path
//       fill="#2B2B2B"
//       d="M348 374c4.099 3.65 6.82 8.04 9.75 12.625l1.535 2.352C363 394.744 363 394.744 363 397c-5.273 3.223-5.273 3.223-7 4l-2-1-.063 1.75c-1.24 2.978-3.158 4.094-5.968 5.55-3.313 1.177-5.654.682-8.969-.3-6.484-3.795-10.443-11.129-13-18l6-5c3.154 2.102 4.178 3.911 5.95 7.18 1.434 2.485 3.197 4.636 5.05 6.82 3.29-.379 3.29-.379 6-2 .596-4.621-.942-6.903-3.563-10.625-2.003-2.852-2.003-2.852-3.437-5.375 1.245-3.736 2.634-4.188 6-6Z"
//     />
//     <path
//       fill="#2A2A2A"
//       d="M413 301c4.114 1.553 6.964 3.034 9 7 1.19 5.583 1.376 9.654-1 15-2.583 3.315-5.148 5.653-9.355 6.441-4.162.102-6.097-.076-9.645-2.441 1.162-6.467 3.125-12.096 6-18l-4 1-2 11-7 1c-.322-6.037-.568-10.832 3-16 4.905-4.426 8.394-5.689 15-5Zm0 10c-2.29 4.812-2.29 4.812-3 10 1.94-.276 1.94-.276 4-1 2.367-2.848 2.367-2.848 1.625-6.188L415 311h-2Z"
//     />
//     <path
//       fill="#272727"
//       d="M314.938 75.875c2.566 2.645 3.92 4.708 4.292 8.414-.02 1.156-.02 1.156-.043 2.336l-.019 2.352C319 91 319 91 318 93c-6.311-1.1-12.063-2.581-18-5 3.368 4.066 3.368 4.066 8.313 5.313L311 93l3 6c-4.484 2.617-8.065 2.184-13 1-4.299-2.271-7.555-4.767-10-9-.862-4.749-.477-8.08 1.75-12.375 6.48-7.56 13.795-8.107 22.188-2.75ZM302.313 80.5 301 82c3.445 2.296 5.938 2.54 10 3-.276-1.94-.276-1.94-1-4-3.911-2.636-3.911-2.636-7.688-.5Z"
//     />
//     <path
//       fill="#282828"
//       d="M323 394c3.575 1.694 5.325 2.895 7.375 6.25 1.156 5.085 1.188 9.123-.5 14-2.355 3.454-4.076 4.954-7.875 6.75-4.773.68-8.69.576-13.125-1.375L307 418v-2h-2l-2-6 2.738-1.242 3.575-1.633 3.55-1.617c3.196-1.447 3.196-1.447 6.137-3.508-4.766.225-4.766.225-8.625 2.625L309 406c-2.688-.313-2.688-.313-5-1-.813-1.688-.813-1.688-1-4 5.785-6.942 11.265-8.024 20-7Zm-5.563 16-2.503 1.125L313 412l3 3 6-2 1-5c-1.957 0-3.813 1.211-5.563 2ZM179.098 389.684c4.792 2.158 7.707 4.377 9.902 9.316.794 5.081.558 8.844-1.688 13.5-3.625 3.92-6.558 4.595-11.75 4.813-4.217-.127-7.067-.793-10.562-3.313-2.833-3.416-3.925-6.263-4.375-10.688.34-3.002.765-4.797 2.375-7.312 4.689.556 8.2 1.882 12.375 4.063 1.06.547 2.12 1.095 3.21 1.66L181 403c-1.895-3.772-1.895-3.772-5.262-6.145l-2.425-.668-2.45-.707L169 395l-1-5c3.608-1.804 7.3-1.554 11.098-.316ZM169 404c.344 2.473.344 2.473 1 5 2.709 1.354 5.01 1.065 8 1-.722-3.273-.722-3.273-3.938-4.688-2.813-1.443-2.813-1.443-5.062-1.312Z"
//     />
//     <path
//       fill="#232323"
//       d="M253 66c4.25 4.722 5.292 7.539 5.223 13.746-.431 4.362-2.931 7.511-6.223 10.254-5.412 1.804-11.593 1.922-16.938-.125-3.992-3.63-6.29-6.866-6.625-12.313.241-4.908 1.974-8.229 5.563-11.562 5.75-2.939 13.32-3.314 19 0Zm-13.75 6.25c-1.47 2.058-2.1 3.21-2.25 5.75 1.148 2.244 2.21 4.21 4 6 3.486-.093 3.486-.093 7-1 1.995-2.327 2.035-3.525 1.813-6.563-.896-2.686-1.472-3.849-3.813-5.437-2.9-.435-4.34-.472-6.75 1.25Z"
//     />
//     <path
//       fill="#262626"
//       d="M96 209c.25 5.625.25 5.625-2 9-.13 2.12-.13 2.12.063 4.375.099 4.054-.432 6.387-3.063 9.625-3.092 1.546-5.594 1.294-9 1-2.207-1.637-2.207-1.637-4-4-.426-2.945-.426-2.945-.313-6.125l.075-3.195C78 217 78 217 79 215l-4 1v12l-7 1c-1.744-5.231-1.775-10.701.25-15.875 5.707-10.19 18.135-6.208 27.75-4.125Zm-12 7v8h4c.688-2.354.688-2.354 1-5l-2-3h-3Z"
//     />
//     <path
//       fill="#242424"
//       d="M104.844 315.047c2.897 2.301 4.806 4.54 6.156 7.953.554 4.83.59 9.425-1.125 14-3.435 3.664-6.974 5.16-11.938 5.375-5.517-.525-7.645-2.255-11.75-5.813-3.034-3.844-2.88-7.98-2.675-12.71.753-4.402 2.085-5.979 5.488-8.852 4.697-3 11.028-2.688 15.844.047Zm-12.906 8.015c-1.538 3.178-.785 5.612.062 8.938 2.83 2.346 2.83 2.346 6.063 1.688 2.85-.548 2.85-.548 4.937-1.688.842-3.391.842-3.391 1-7l-2-3c-5.232-.54-5.232-.54-10.063 1.063Z"
//     />
//     <path
//       fill="#2B2B2B"
//       d="M395 323c2 3 2 3 1.938 4.813-.938 2.187-.938 2.187-3.5 5.25-2.757 2.686-2.757 2.686-2.438 5.937l1.574-1.715 2.113-2.223 2.075-2.214c2.513-2.075 4.01-2.633 7.238-2.848 2.283 1.142 4.19 2.19 6 4 1.093 6.971-.28 11.523-4.2 17.285-2.205 2.1-3.816 2.385-6.8 2.715l-3-6 2.375-.563c3.019-1.277 3.019-1.277 3.938-5.062L403 339a8986.59 8986.59 0 0 0-3.938 3.438l-2.214 1.933c-.97.854-1.935 1.716-2.848 2.629-1.996.203-1.996.203-4.438.25l-2.433.078L385 347c-2.71-4.065-2.516-7.232-2-12 1.85-5.244 5.961-12 12-12Z"
//     />
//     <path
//       fill="#2A2A2A"
//       d="M180 77c3.47 5.204 2.734 11.875 3 18l.234 3.328c.128 2.648.194 5.056-.234 7.672-2.188 2.25-2.188 2.25-5 3-4.749-.332-6.942-2.396-10.313-5.625l-2.882-2.719L162 98a504.302 504.302 0 0 0-4.688-4.125l-1.949-1.695L154 91c2.188-2.063 2.188-2.063 5-4 6.58.263 10.503 5.743 15 10V80l6-3Z"
//     />
//     <path
//       fill="#262626"
//       d="M91 274c3.028 2.344 4.319 4.22 4.938 7.938.178 2.669.006 4.257-.75 6.875-3.936 3.935-9.535 5.117-15.008 5.261L78 294v4l-5 1v-3l-8 1-1-8 6-1-1-7 6-1 1 6 11-3-.25-2.813C87 277 87 277 89 275.125L91 274Z"
//     />
//     <path
//       fill="#303030"
//       d="M147 362c1.688 1.563 1.688 1.563 3 3-1 3-1 3-4 4.762a288.7 288.7 0 0 1-4 1.925l-2.148 1.044A825.82 825.82 0 0 1 133 376l-2.293 1.086c-2.92 1.382-5.84 2.76-8.77 4.124l-2 .93-1.957.901a79.578 79.578 0 0 0-4.117 2.152l-2.113 1.166-1.89 1.093c-1.86.548-1.86.548-4.016-.217-2.2-1.474-2.872-2.805-3.844-5.235l20.273-10.137 2.07-1.035c1.348-.674 2.697-1.346 4.046-2.017a407.875 407.875 0 0 0 8.732-4.46l2.691-1.413 2.27-1.223C144 361 144 361 147 362Z"
//     />
//     <path
//       fill="#2A2A2A"
//       d="M432 165c1.46 2.647 2 3.894 2 7l-48 6-3-7c2.08-2.08 6.191-1.815 9.059-2.191l2.48-.332c1.74-.232 3.481-.461 5.222-.689 2.635-.345 5.268-.702 7.901-1.06 8.158-1.086 16.088-2.06 24.338-1.728Z"
//     />
//     <path
//       fill="#292929"
//       d="M412.125 144.688C414 146 414 146 416 149v3c-2.063 1.473-2.063 1.473-5 3.063-5.35 2.982-10.567 6.11-15.75 9.375l-2.168 1.361A3851.64 3851.64 0 0 0 388 169c-2.784-1.706-3.854-2.476-4.75-5.688L383 161a985.722 985.722 0 0 1 16.313-10.75l1.812-1.177c8.21-5.288 8.21-5.288 11-4.386Z"
//     />
//     <path
//       fill="#252525"
//       d="M218.563 56.938 222 57c.857 4.663 1.711 9.326 2.563 13.99a5855.45 5855.45 0 0 1 2.124 11.597l.398 2.155c.915 5.03.915 5.03.915 7.258-2.957 1.478-5.742 1.06-9 1-5.083-24.678-5.083-24.678-5-35 1-1 1-1 4.563-1.063Z"
//     />
//     <path
//       fill="#2E2E2E"
//       d="M327 81c5.75 1.75 5.75 1.75 8 4a220.497 220.497 0 0 0 7 3c-.875 4.75-.875 4.75-2 7l-8-1c-.315.508-.63 1.016-.953 1.54A395.09 395.09 0 0 1 323 108c-5.75-1.875-5.75-1.875-8-3a87.305 87.305 0 0 1 4.383-9.645l1.347-2.548 1.395-2.62 1.418-2.677c1.15-2.171 2.302-4.341 3.457-6.51Z"
//     />
//     <path
//       fill="#2A2A2A"
//       d="M298 401c1.01 3.393 2.007 6.79 3 10.188l.867 2.908.82 2.822.762 2.587c.569 2.576.65 4.865.551 7.495l-1.793.113c-4.873.406-8.108 1.03-12.207 3.887h-2c-1.257-2.906-2-4.796-2-8l6-2-.438-3.875c-.56-5.038-1.067-10.08-1.562-15.125 2.892-.826 4.887-1 8-1ZM77 182c5.75.75 5.75.75 8 3 .27 2.688.087 5.291 0 8l2.266.586 2.984.789 2.953.773A34.558 34.558 0 0 1 100 198l-2 8c-8.957-2.018-17.416-4.787-26-8 .813-3.438.813-3.438 2-7l3-1-.563-2.313C76 185 76 185 77 182ZM377 344c4.806 1.556 8.287 4.278 12.188 7.375l1.904 1.46c5.981 4.71 5.981 4.71 6.908 8.165-1.375 2.75-1.375 2.75-3 5l-5-1v-2l-1.578-.68c-3.329-1.814-6.195-4.11-9.172-6.445l-1.824-1.418c-1.478-1.15-2.952-2.303-4.426-3.457.694-3.26 1.459-4.79 4-7Z"
//     />
//     <path
//       fill="#323232"
//       d="M348.563 113.313C351 114 351 114 353 115c.125 2.875.125 2.875 0 6-2 2-2 2-5 2.188-3-.188-3-.188-5-1.188-.188-3.375-.188-3.375 0-7 3-2 3-2 5.563-1.688ZM264 406.75c3 .25 3 .25 5 2.25-.375 3.625-.375 3.625-1 7-2.915.81-4.461 1.218-7.313.063L259 415c-.125-2.875-.125-2.875 0-6 2-2 2-2 5-2.25Z"
//     />
//     <path
//       fill="#313131"
//       d="M402.125 362.875 405 363c1.125 2.25 1.125 2.25 2 5-.875 2.313-.875 2.313-2 4-2.333.042-4.667.04-7 0-1-1-1-1-1.188-3.938.262-4.268 1.04-5.016 5.313-5.187Z"
//     />
//     <path
//       fill="#676767"
//       d="m112 115 2 1-13 13-2-1a85.132 85.132 0 0 1 13-13Z"
//     />
//     <path
//       fill="#656565"
//       d="M376 121c-1.382 3.21-2.924 5.05-5.625 7.25l-1.914 1.578L367 131c1.317-4.189 4.025-10 9-10Z"
//     />
//     <path
//       fill="gray"
//       d="m264 64 13 2v1l-6 1v-2c-4.479.447-4.479.447-8 3l1-5Z"
//     />
//     <path fill="#6D6D6D" d="m143 97 2 1-8 8c0-3 0-3 2.438-5.625L142 98l1-1Z" />
//     <path
//       fill="#5F5F5F"
//       d="M299 74c-1.491 3.795-3.757 5.61-7 8 2.81-8 2.81-8 7-8Z"
//     />
//     <path
//       fill="#5D5D5D"
//       d="m377 344 3 1c-4.75 4.875-4.75 4.875-7 6 .564-3.27 1.5-4.826 4-7Z"
//     />
//     <path
//       fill="#5B5B5B"
//       d="M142 374c-1.393 3.367-2.979 4.986-6 7 .628-3.645 1.853-7 6-7Z"
//     />
//     <path
//       fill="#5E5E5E"
//       d="M240 66c-2.947 1.8-5.888 3.502-9 5 3.715-6.586 3.715-6.586 9-5Z"
//     />
//   </svg>
// )

const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="496"
    height="496"
    viewBox="0 0 496 496"
    xmlSpace="preserve"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M234.709 430.04c-.856-8.144-1.693-15.837-2.53-23.53l-1.202-.281c-4.328 7.025-8.66 14.048-12.983 21.076-.786 1.276-1.597 2.541-2.302 3.862-1.19 2.23-2.64 3.718-5.52 3.1-2.984-.64-3.269-2.735-3.526-5.216-1.021-9.853-2.186-19.691-3.465-31.02-5.824 9.69-11.023 18.148-16.013 26.728-2.136 3.671-4.532 4.592-8.005 1.873.081-2.568 1.784-4.33 2.944-6.291 5.848-9.894 11.813-19.72 17.695-29.593 1.202-2.018 2.465-3.423 5.18-2.695 2.768.741 4.08 2.124 4.361 5.149.888 9.53 2.102 19.032 3.284 29.375 4.161-4.222 5.983-8.91 8.686-12.98 2.855-4.297 5.458-8.769 8.02-13.25 1.283-2.245 3.03-2.15 5.127-1.717 1.928.397 3.567.971 3.8 3.26 1.398 13.72 2.797 27.441 4.162 41.165.044.444-.267.924-.405 1.363-6.239-.086-6.239-.086-7.308-10.378zM366.087 319.957c.827-.624 1.314-1.126 1.908-1.393 2.112-.95 4.324-3.378 6.46-.25 2.542 3.72-.984 4.348-3.112 5.658-2.441 1.503-4.49 3.447-6.186 5.751-4.283 5.819-3.58 9.84 2.853 14.524.628-6.345 2.9-11.685 8.217-15.276 2.83-1.911 5.936-3.118 9.365-2.975 7.026.294 13.737 5.742 15.377 12.296 1.976 7.893-2.3 15.713-11.264 20.606-1.077 1.008.262 1.81.225 2.705-.157 3.773-2.902 5.272-6.002 3.087-7.214-5.085-14.47-10.134-21.417-15.57-7.697-6.022-8.662-13.345-3.338-21.515 1.826-2.803 3.918-5.39 6.914-7.648m13.654 33.134c1.716.799 3.542.917 5.38.751 4.91-.443 9.299-5.322 9.573-10.58.26-4.977-2.98-9.086-7.886-10.002-4.912-.917-9.627 1.65-11.772 6.409-2.134 4.734-.779 9.134 4.705 13.422zM435.2 203.107c.744 7.814 3.645 14.952 2.28 22.568-1.904 10.635-8.45 16.69-20.02 18.295-8.14 1.13-16.863-3.986-20.811-12.505-3.333-7.19-3.58-15.12-4.98-22.77-.45-2.46 1.164-3.284 3.086-3.626 11.923-2.117 23.859-4.163 35.785-6.263 3.134-.552 4.098 1.356 4.66 4.301m-30.277 7.322c-1.92.828-4.285.303-6.085 1.908.58 5.153 1.038 10.285 3.01 15.075 2.644 6.425 7.935 9.604 14.954 9.266 6.8-.328 11.833-4.384 13.942-10.835 1.991-6.091-.355-11.79-1.27-17.61-.318-2.013-2.08-1.592-3.633-1.316-6.689 1.185-13.392 2.288-20.918 3.512zM81.41 333.52c-3.15-7.165-6.841-13.767-5.076-21.743 2.078-9.384 8.162-14.747 17.127-16.717 8.76-1.926 16.144 1.079 21.495 8.284 4.501 6.06 6.721 13.319 9.797 20.12 1.04 2.302-.357 3.338-2.212 4.16-11.088 4.918-22.188 9.809-33.236 14.815-2.671 1.21-4.015.255-4.977-2.164-.86-2.16-1.834-4.275-2.918-6.755m4.554-4.986 3.023 6.138c5.782-2.52 11.218-4.9 16.662-7.262 12.565-5.453 13.191-7.84 5.006-19.29a18.49 18.49 0 0 0-1.915-2.286c-5.023-5.048-11.78-5.876-18.298-2.275-6.345 3.505-9.216 9.868-7.401 16.786.67 2.555 1.709 5.013 2.923 8.189zM139.566 385.566c-3.229 3.375-6.237 6.473-9.215 9.6-1.523 1.599-2.974 1.865-4.678.187-1.652-1.627-2.473-3.231-.368-5.008 3.168-2.674 6.404-5.268 9.197-8.618-6.522-2.016-10.98-5.164-13.751-10.396-1.663-3.139-2.465-6.495-1.675-10.101 1.82-8.306 9.345-14.659 17.296-14.55 8.348.113 14.72 5.833 16.345 15.064 2.486-1.662 4.614-1.139 6.14 1.267 1.771 2.79-.947 3.849-2.282 5.239-5.523 5.75-11.173 11.378-17.009 17.316m-11.34-27.788c-3.949 6.497-2.924 12.506 2.698 15.828 5.174 3.058 12.167.632 15.12-5.245 2.715-5.403.524-11.466-5.184-14.086-4.784-2.195-8.682-.428-12.635 3.503zM150.251 142.09c-1.963.323-2.99.912-1.595 2.615 1.58 1.928 3.264 3.772 4.856 5.691 3.453 4.162 3.29 4.771-2.3 7.674-6.661-7.669-13.4-15.43-20.143-23.189-1.854-2.134-3.81-4.19-5.54-6.419-1.122-1.445-3.538-2.64-2.021-5.016 1.354-2.12 3.285-3.317 5.669-1.517 1.391-2.536 2.334-4.892 3.816-6.838 4.389-5.765 11.821-8.104 18.215-6.002 7.074 2.325 12.118 9.207 12.14 16.564.022 7.893-4.128 13.204-13.097 16.437m-12.2-23.524c-3.611 5.084-3.708 9.249-.315 13.564 3.274 4.163 7.963 5.637 12.291 3.735 3.913-1.719 6.51-4.486 6.657-9.029.156-4.818-2.094-8.374-6.198-10.51-4.21-2.192-8.331-1.616-12.434 2.24zM381.563 127.557c1.81-1.975 3.43-3.653 4.943-5.42 1.79-2.09 3.392-2.132 5.404-.146 1.952 1.925 1.45 3.343-.193 5.046-5.196 5.387-10.122 11.05-15.518 16.224-11.272 10.813-28.02 5.914-32.07-9.236-1.52-5.685.5-10.686 3.993-14.849 5.34-6.361 11.192-12.29 16.813-18.416 1.666-1.815 3.094-1.248 4.685.195 1.797 1.63 2.241 3.055.365 5.004a820.105 820.105 0 0 0-15.024 16.006c-5.023 5.506-5.539 10.896-1.691 15.599 5.119 6.257 11.25 6.858 17.275 1.338 3.795-3.476 7.2-7.377 11.018-11.345zM308.897 74.803c-1.545 6.714-2.708 13.11-4.428 19.351-3.16 11.468-11.25 16.327-22.196 13.713-11.332-2.707-16.17-10.557-13.773-22.503 1.34-6.68 2.746-13.35 4.269-19.99.48-2.095.428-4.86 4.187-4.079 3.564.74 3.475 2.712 2.8 5.509-1.521 6.3-3.008 12.616-4.202 18.983-1.961 10.45 2.48 16.267 11.943 16.002 5.263-.148 8.594-3.003 10.162-9.25 1.618-6.445 2.828-12.994 4.426-19.446.623-2.513.492-6.244 4.947-5.178 4.208 1.007 2.083 4.097 1.865 6.888zM395.041 170.055c-2.806 6.617-5.466 12.892-8.162 19.153-.1.232-.543.315-1.122.627-3.116-2.542-4.057-5.386-2.263-9.404 2.142-4.799 4.536-9.558 5.703-14.767-7.422-4.165-18.242 2.383-23.85-8.466 7.867-1.406 14.89.331 21.832.931 4.346.376 5.941-1.055 7.305-4.579 2.326-6.01 4.95-11.904 7.603-18.217 3.855 2.837 4.952 5.711 3.137 9.724-2.033 4.492-3.758 9.123-5.887 14.358 5.333.477 9.907 1.155 14.49 1.218 4.323.059 6.888 1.777 7.915 6.416-7.048 1.19-13.854-.716-20.685-.98-3.176-.123-5.147.424-6.016 3.986zM153.284 397.435c-2.755-5.033-2.726-9.792-.718-14.708 1.344-3.292 2.867-4.265 6.34-2.211 5.96 3.524 11.608 7.661 18.115 10.309 2.224-6.991-2.18-12.872-9.989-13.721-1.45-.158-3.055.4-4.318-.711-1.147-1.01-1.208-2.465-.769-3.697.779-2.183 2.849-1.982 4.659-1.958 8.405.11 16.363 6.839 18.028 15.193 1.395 6.998-2.998 15.218-9.837 18.405-7.634 3.558-15.503 1.128-21.511-6.901m4.868-9.982c-1.314 5.054.573 9.234 5.128 11.357 4.204 1.96 7.97 1.006 10.797-2.964-4.98-3.194-9.813-6.577-15.925-8.393zM321.22 393.132c2.876-1.654 5.922-2.343 7.888-4.784-4.754-5.578-12.795-4.962-17.288 1.46-1.57 2.246-2.875 4.482-5.737 2.189-2.74-2.195-.376-4.24.852-5.977 4.583-6.486 14.066-9.418 21.358-6.781 7.111 2.572 11.642 10.119 11.007 18.334-.543 7.026-6.699 13.267-14.39 14.59-6.34 1.09-13.733-2.82-16.694-8.621-1.304-2.554-.64-3.975 1.85-5.086 3.648-1.628 7.22-3.428 11.153-5.324m-5.213 8.703c2.199 3.864 6.384 5.218 10.788 3.488 4.638-1.82 6.51-5.812 5.071-11.7-5.229 2.612-10.348 5.17-15.86 8.212zM181.923 121.352c-9.447 2.255-17.037-1.685-20.43-10.31-3.235-8.218-.433-16.234 7.185-20.56 7.463-4.236 15.766-2.691 21.017 3.91 3.402 4.276 3.207 5.318-1.56 7.81-5.862 3.063-11.74 6.095-17.65 9.16 3.56 5.614 10.776 5.662 15.939.56a13.36 13.36 0 0 0 2.364-3.18c1.074-2.015 2.453-1.8 4.165-.983 2.04.974 1.996 2.456 1.154 4.14-2.47 4.941-6.705 7.69-12.184 9.453m-11.685-24.716c-2.187 1.726-3.465 4.042-3.705 6.745-.157 1.756.5 3.658 2.862 2.554 4.852-2.267 9.789-4.445 14.166-7.696-3.79-4.71-6.853-5.12-13.323-1.603zM97.055 261.275c1.567-2.905 3.307-3.474 5.706-1.349 5.557 4.924 6.615 16.782 2.025 23.61-4.33 6.443-14.638 8.928-22.015 5.308-6.91-3.39-10.584-12.394-8.254-20.035 1.775-5.822 5.906-9.112 11.497-10.76 3.008-.886 4.98-.338 5.427 3.535.792 6.87 2.133 13.675 3.253 20.567 6.884-2.107 8.954-9.795 4.893-16.402-.854-1.39-2.546-2.247-2.532-4.474m-11.63 21.756c1.222.5 2.449 1.1 3.765-.294-.752-5.83-1.074-11.836-2.955-17.705-7.945 4.011-8.389 11.934-.81 17.999zM104.456 218.73c-8.207 3.815-15.646 2.872-21.106-2.422-4.99-4.839-6.368-12.281-3.505-18.925 2.941-6.827 10.315-10.742 17.53-9.513 3.565.608 4.841 2.17 3.698 5.813-2.075 6.615-3.9 13.308-5.855 20.062 6.428.633 11.136-3.898 11.435-10.496.067-1.479.008-3.042-.404-4.445-.636-2.165-.206-3.56 2.002-4.293 2.58-.855 3.212 1.058 3.836 2.776 2.548 7.014-.457 15.656-7.63 21.443m-13.645-8.823c1.407-5.008 3.394-9.875 4.01-15.353-4.672-.567-7.538 1.42-9.401 5.135-1.89 3.767-1.493 7.404 1.154 10.633 1.066 1.3 2.538 3.218 4.237-.415zM410.619 259.145c.138-3.99-1.429-4.481-4.263-2.778-4.464 2.683-6.338 9.433-3.97 15.081.884 2.11 2.01 4.086-.776 5.466-2.903 1.438-3.946-.918-4.758-2.852-2.931-6.979-2.31-13.775 2.329-19.75 3.958-5.098 9.479-7.065 15.93-5.925 6.995 1.236 11.859 4.977 13.735 12.046 2.843 10.713-5.167 21.15-15.863 20.917-3.22-.07-4.612-1.297-4.258-4.497a2463.23 2463.23 0 0 0 1.894-17.708m8.803 13.76c6.285-6.456 5.22-13.662-2.69-16.878-2.356 4.563-1.05 9.699-2.212 14.45-.913 3.732.818 5.01 4.902 2.429zM102.516 163.098c-3.153-8.638-.649-15.459 5.812-20.857 5.579-4.661 11.885-4.771 18.224-1.505 6.224 3.206 9.43 8.614 9.173 15.432-.269 7.162-3.976 12.66-10.623 15.699-6.178 2.823-12.021 1.78-17.34-2.331-2.13-1.647-3.865-3.66-5.246-6.438m14.552 3.466c7.105.132 11.757-3.427 12.426-9.508.538-4.878-4.37-10.73-9.765-11.643-5.667-.959-10.753 2.684-12.094 8.66-1.101 4.91 1.997 9.304 9.433 12.491zM357.586 363.393c-1.708-2.07-3.208-3.848-4.664-5.663-1.262-1.574-1.177-2.94.56-4.214 1.612-1.182 3.075-2.07 4.712-.098 6.348 7.644 12.71 15.277 19.045 22.888-1.776 3.126-3.805 4.576-6.755 3.155-1.33 2.32-2.272 4.49-3.67 6.311-6.287 8.2-15.213 8.602-22.106.977-3.454-3.82-6.648-7.873-9.981-11.802-1.634-1.926-2.848-3.696-.13-5.837 2.538-2 3.854-.394 5.303 1.352 2.972 3.58 5.9 7.202 8.97 10.697 3.8 4.325 7.81 4.923 11.794 1.943 4.389-3.282 5.345-7.985 2.326-12.734-1.507-2.372-3.437-4.476-5.404-6.975zM399.54 309.053c-7.255-.205-10.922-3.78-10.795-10.47.11-5.832 2.27-11.028 5.864-15.592 1.222-1.552 2.497-3.367 4.874-1.395 2.062 1.712 1.639 3.234.101 5.062-1.938 2.305-3.379 4.951-4.137 7.894-.651 2.53-2.006 5.54 1.427 6.919 3.17 1.273 4.257-1.673 5.493-3.784 1.008-1.72 1.828-3.55 2.82-5.28 2.904-5.064 6.904-6.922 11.536-5.422 3.929 1.272 6.862 5.896 6.41 10.816-.446 4.872-2.162 9.38-5.14 13.328-1.181 1.568-2.511 2.838-4.512 1.076-1.607-1.415-2.037-2.892-.485-4.715 2.094-2.458 3.42-5.316 3.687-8.567.165-2.007.326-4.216-1.983-5.164-2.482-1.02-3.64 1.01-4.706 2.648-1.356 2.086-2.487 4.32-3.713 6.49-1.505 2.666-3.375 4.948-6.742 6.156zM100.408 245.498c-9.401 3.391-18.432 6.654-27.557 9.951-2.179-4.542-.775-6.713 3.166-8.054 6.886-2.344 13.695-4.915 21.522-7.747-7.224-3.829-13.461-7.287-19.842-10.457-3.347-1.662-4.948-3.756-3.49-7.536 2.05-.95 3.507.572 5.02 1.33 7.446 3.73 14.834 7.576 22.218 11.427 2.297 1.198 4.939 1.949 4.831 5.544-.114 3.814-2.79 4.51-5.868 5.542zM320.776 123.903c-3.03 2.933-5.455 2.59-7.621-.43.252-2.04 1.939-2.749 3.166-3.773 13.14-10.971 26.339-21.872 39.46-32.867 2.949-2.471 5.569-3.633 8.511.941-14.438 11.986-28.838 23.94-43.516 36.129zM317.695 91.786c1.99-4.435 3.942-8.475 5.677-12.607 1.072-2.55 2.318-3.785 5.252-2.426 2.743 1.27 2.532 2.874 1.477 5.185-4.896 10.723-9.693 21.491-14.494 32.257-1.019 2.285-1.944 4.202-5.122 2.713-3.04-1.425-2.51-3.299-1.434-5.658 2.894-6.344 5.684-12.736 8.644-19.464zM104.07 183.054c-9.182-4.378-18.02-8.602-26.735-12.768 1.134-6.287 1.96-6.77 7.045-4.323 10.951 5.269 21.87 10.607 32.833 15.85 2.348 1.123 4.06 2.187 2.514 5.24-1.512 2.983-3.405 1.807-5.39.868-3.31-1.567-6.615-3.142-10.267-4.867zM205.841 76.585c1.63-.88 2.914-1.685 4.627-1.37 2.093 2.766 2.67 5.104-1.294 7.005-5.157 2.473-5.628 7.016-4.446 11.898.973 4.02 2.29 7.958 3.437 11.937.635 2.205.975 4.236-2.05 5.057-2.757.747-3.834-.397-4.54-2.978-2.184-7.991-4.638-15.909-6.883-23.885-.447-1.588-1.758-3.538.8-4.715 2.126-.977 4.17-1.589 5.325 1.45 1.78-1.59 3.246-2.9 5.024-4.399zM299.833 420.84c-1.166-.919-1.725-2.784-3.257-.786-1.351 1.762-3.275 2.802-5.234 3.735-1.689.805-3.231.907-4.083-1.215-.674-1.681-.953-3.457 1.03-4.285 7.887-3.297 7.173-9.382 5.366-15.895-.889-3.201-1.72-6.418-2.617-9.617-.693-2.472.31-3.655 2.713-4.308 2.491-.677 3.308.569 3.852 2.58 2.297 8.492 4.553 16.996 6.96 25.457 1.233 4.334-1.738 4.17-4.73 4.335zM382.98 315.907c-2.085-2.31-.706-4.008.544-5.502 1.286-1.536 2.737-.36 4.04.26 7.486 3.559 14.95 7.164 22.445 10.703 2.351 1.11 3.991 2.3 2.443 5.293-1.52 2.94-3.394 1.766-5.381.816-7.927-3.788-15.861-7.56-24.092-11.57zM262.215 401.264c-2.09 2.312-4.258 2.664-6.445 1.065-1.596-1.166-2.202-2.908-1.41-4.869.947-2.347 2.808-3.425 5.183-2.714 3.062.916 4.18 3.069 2.672 6.518zM236.4 100.682c-.077-3.412 1.468-4.963 4.476-4.993 2.362-.024 3.67 1.39 4.117 3.53.472 2.257-.627 3.992-2.674 4.725-2.749.984-4.847.028-5.92-3.262zM424.818 332.395c-1.83 2.592-3.847 3.165-6.094 1.34-1.52-1.237-2.204-2.909-1.221-4.848 1.007-1.989 2.66-3.081 4.852-2.406 2.725.84 3.266 2.989 2.463 5.914z" />
  </svg>
);

export default CircularText


