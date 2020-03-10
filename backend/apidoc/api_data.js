define({ "api": [
  {
    "type": "post",
    "url": "/auth",
    "title": "Athentification",
    "description": "<p>Authentification process <br/> If the user is successfully logged in, this will return a json web token (jwt) that must be sent in a Bearer Header</p>",
    "name": "PostAuth",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pseudo_user",
            "description": "<p>User unique username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_user",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The jwt token.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "InvalidUsername",
            "description": "<p>The username of the user is invalid</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "InvalidPassword",
            "description": "<p>The password of the user is invalid</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/remarks_contexts/:idRemarksContext",
    "title": "Get a Remarks Context",
    "description": "<p>Get the data of the Remark Context</p>",
    "name": "GetRemarksContext",
    "group": "Remarks_Contexts",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "integer",
            "optional": false,
            "field": "id_context",
            "description": "<p>The id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name_context",
            "description": "<p>The name</p>"
          },
          {
            "group": "200",
            "type": "integer",
            "optional": false,
            "field": "color_context",
            "description": "<p>The color associated</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The Remark Context doesn't exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/remarks_contexts.js",
    "groupTitle": "Remarks_Contexts"
  },
  {
    "type": "get",
    "url": "/remarks_contexts",
    "title": "Get All Remarks Contexts",
    "description": "<p>Get the list of all Remarks Contexts</p>",
    "name": "GetRemarksContexts",
    "group": "Remarks_Contexts",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "RemarksContexts",
            "description": "<p>An array containing the Remarks Contexts</p>"
          },
          {
            "group": "200",
            "type": "integer",
            "optional": false,
            "field": "RemarksContexts.id_context",
            "description": "<p>The id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RemarksContexts.name_context",
            "description": "<p>The name</p>"
          },
          {
            "group": "200",
            "type": "integer",
            "optional": false,
            "field": "RemarksContexts.color_context",
            "description": "<p>The color associated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/remarks_contexts.js",
    "groupTitle": "Remarks_Contexts"
  },
  {
    "type": "post",
    "url": "/remarks_contexts",
    "title": "Add a Remark Context",
    "description": "<p>Create a new Remark Context</p>",
    "name": "PostRemarksContexts",
    "group": "Remarks_Contexts",
    "permission": [
      {
        "name": "MustBeAdmin",
        "title": "The user must be admin to reach this ressource",
        "description": ""
      },
      {
        "name": "NeedToken",
        "title": "The json Web token (jwt) is needed",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name_context",
            "description": "<p>The name of the Remarks Context.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "color_context",
            "description": "<p>The color of the Remarks Context.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "optional": false,
            "field": "Created",
            "description": "<p>The Remarks Context has been created</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "MissingParameters",
            "description": "<p>The request is missing parameters</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "InvalidJWTToken",
            "description": "<p>The jwt token is invalid</p>"
          },
          {
            "group": "401",
            "optional": false,
            "field": "AuthorizationHeaderNotDefined",
            "description": "<p>The Authorization header is not defined</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "NotAnAdmin",
            "description": "<p>The user is authentified but is not an admin, they may not access this ressource</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/remarks_contexts.js",
    "groupTitle": "Remarks_Contexts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token : The token is the jwt token given when successfully reached POST /auth</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/responses_types/:idResponseType",
    "title": "Get a Responses Type",
    "description": "<p>Get the data of the Responses Type</p>",
    "name": "GetResponsesType",
    "group": "Responses_Types",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "integer",
            "optional": false,
            "field": "id_response_type",
            "description": "<p>The id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name_response_type",
            "description": "<p>The name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "emoji_response_type",
            "description": "<p>The emoji associated</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The ResponseType doesn't exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/responses_types.js",
    "groupTitle": "Responses_Types"
  },
  {
    "type": "get",
    "url": "/responses_types",
    "title": "Get All Responses Types",
    "description": "<p>Get the list of all Responses Types</p>",
    "name": "GetResponsesTypes",
    "group": "Responses_Types",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "ResponseTypes",
            "description": "<p>An array containing the Responses Types</p>"
          },
          {
            "group": "200",
            "type": "integer",
            "optional": false,
            "field": "ResponseTypes.id_response_type",
            "description": "<p>The id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ResponseTypes.name_response_type",
            "description": "<p>The name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ResponseTypes.emoji_response_type",
            "description": "<p>The emoji associated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/responses_types.js",
    "groupTitle": "Responses_Types"
  },
  {
    "type": "post",
    "url": "/responses_types",
    "title": "Add a Responses Type",
    "description": "<p>Create a new Responses Type</p>",
    "name": "PostResponsesTypes",
    "group": "Responses_Types",
    "permission": [
      {
        "name": "MustBeAdmin",
        "title": "The user must be admin to reach this ressource",
        "description": ""
      },
      {
        "name": "NeedToken",
        "title": "The json Web token (jwt) is needed",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name_response_type",
            "description": "<p>The name of the Responses Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emoji_response_type",
            "description": "<p>The emoji associated with this responses type.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "optional": false,
            "field": "Created",
            "description": "<p>The Response type has been created</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "MissingParameters",
            "description": "<p>The request is missing parameters</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "InvalidJWTToken",
            "description": "<p>The jwt token is invalid</p>"
          },
          {
            "group": "401",
            "optional": false,
            "field": "AuthorizationHeaderNotDefined",
            "description": "<p>The Authorization header is not defined</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "NotAnAdmin",
            "description": "<p>The user is authentified but is not an admin, they may not access this ressource</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/responses_types.js",
    "groupTitle": "Responses_Types",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token : The token is the jwt token given when successfully reached POST /auth</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user/:pseudoUser",
    "title": "Get User",
    "description": "<p>Get the user information</p>",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pseudoUser",
            "description": "<p>User unique username.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pseudo_user",
            "description": "<p>The pseudo of the user.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserDoesntExists",
            "description": "<p>The user doesn't exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get All Users",
    "description": "<p>Get all users</p>",
    "name": "GetUsers",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>The array of users</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.pseudo_user",
            "description": "<p>The pseudo of the user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Add User",
    "description": "<p>Create a new user</p>",
    "name": "PostUsers",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "4..",
            "optional": false,
            "field": "pseudoUser",
            "description": "<p>User unique username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "5..",
            "optional": false,
            "field": "passwordUser",
            "description": "<p>User password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "pseudo_user",
            "description": "<p>The pseudo of the user.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "MissingParameter",
            "description": "<p>The user doesn't exists</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "PseudoLengthTooShort",
            "description": "<p>The pseudo length is too short</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "PasswordLengthTooShort",
            "description": "<p>The password length is too short</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "PseudoAlreadyUsed",
            "description": "<p>The pseudo already exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  }
] });
