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
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>The user data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.pseudo_user",
            "description": "<p>The user pseudo</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "user.is_admin_user",
            "description": "<p>true if the user is admin</p>"
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
    "type": "delete",
    "url": "/remarks/:idRemark",
    "title": "Delete a Remark",
    "description": "<p>Delete the Remark if the user is the owner of this remark or is an admin</p>",
    "name": "DeleteRemark",
    "group": "Remarks",
    "permission": [
      {
        "name": "NeedToken",
        "title": "The json Web token (jwt) is needed",
        "description": ""
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "Success",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
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
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The Remark doesn't exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/remarks.js",
    "groupTitle": "Remarks",
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
    "type": "delete",
    "url": "/remarks/:idRemark/seen",
    "title": "Seen -1",
    "description": "<p>Decrease the number of &quot;seen&quot; of this Remark by 1</p>",
    "name": "DeleteSeen",
    "group": "Remarks",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "Success",
            "description": ""
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
            "description": "<p>The Remark doesn't exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/remarks.js",
    "groupTitle": "Remarks"
  },
  {
    "type": "delete",
    "url": "/remarks/:idRemark/suffered",
    "title": "Suffered -1",
    "description": "<p>Decrease the number of &quot;suffered&quot; of this Remark by 1</p>",
    "name": "DeleteSuffered",
    "group": "Remarks",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "Success",
            "description": ""
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
            "description": "<p>The Remark doesn't exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/remarks.js",
    "groupTitle": "Remarks"
  },
  {
    "type": "get",
    "url": "/remarks/:idRemark",
    "title": "Get a Remark",
    "description": "<p>Get the data of the Remark</p>",
    "name": "GetRemark",
    "group": "Remarks",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "Remark",
            "description": "<p>The object containing the Remark data</p>"
          },
          {
            "group": "200",
            "type": "number",
            "optional": false,
            "field": "Remark.id_remark",
            "description": "<p>The id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Remark.description_remark",
            "description": "<p>The content of the remark</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Remark.nb_seen_remark",
            "description": "<p>The number of users that declared they have seen a situation like this one</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Remark.nb_suffered_remark",
            "description": "<p>The number of users that declared they have suffered a situation like this one</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Remark.date_remark",
            "description": "<p>The date this remark has been posted</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Remark.pseudo_user",
            "description": "<p>The pseudo of the user who posted this remark, null if anonymous</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Remark.id_context",
            "description": "<p>The id of the context of this remark</p>"
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
            "description": "<p>The Remark doesn't exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/remarks.js",
    "groupTitle": "Remarks"
  },
  {
    "type": "get",
    "url": "/remarks",
    "title": "Get All Remarks",
    "description": "<p>Get the list of all Remarks</p>",
    "name": "GetRemarks",
    "group": "Remarks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number[]",
            "optional": true,
            "field": "context",
            "description": "<p>Select only the remarks which have context in this array. Ex /remarks?context=[&quot;1&quot;,&quot;4&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "content",
            "description": "<p>Select the remarks with description that contains this string</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"date\"",
              "\"popularity\""
            ],
            "optional": true,
            "field": "sortby",
            "defaultValue": "date",
            "description": "<p>Sort the remarks by the most recent or popularity</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"ASC\"",
              "\"DESC\""
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "DESC",
            "description": "<p>the order of the sort</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "Remarks",
            "description": "<p>An array containing the Remarks</p>"
          },
          {
            "group": "200",
            "type": "number",
            "optional": false,
            "field": "Remarks.id_remark",
            "description": "<p>The id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Remarks.description_remark",
            "description": "<p>The content of the remark</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Remarks.nb_seen_remark",
            "description": "<p>The number of users that declared they have seen a situation like this one</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Remarks.nb_suffered_remark",
            "description": "<p>The number of users that declared they have suffered a situation like this one</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Remarks.date_remark",
            "description": "<p>The date this remark has been posted</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Remarks.pseudo_user",
            "description": "<p>The pseudo of the user who posted this remark, null if anonymous</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Remarks.id_context",
            "description": "<p>The id of the context of this remark</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/remarks.js",
    "groupTitle": "Remarks"
  },
  {
    "type": "post",
    "url": "/remarks",
    "title": "Add a Remark",
    "description": "<p>Create a new Remark</p>",
    "name": "PostRemarks",
    "group": "Remarks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": true,
            "field": "Authorization",
            "description": "<p>Bearer token : The token of that authentify the user, if it isn't set, then the user will be considered as anonymous</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description_remark",
            "description": "<p>The content of the remark</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_context",
            "description": "<p>The id of the context of this remark</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "Remark",
            "description": "<p>The object containing the Remark data</p>"
          },
          {
            "group": "201",
            "type": "number",
            "optional": false,
            "field": "Remark.id_remark",
            "description": "<p>The id</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "Remark.description_remark",
            "description": "<p>The content of the remark</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "Remark.nb_seen_remark",
            "description": "<p>The number of users that declared they have seen a situation like this one</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "Remark.nb_suffered_remark",
            "description": "<p>The number of users that declared they have suffered a situation like this one</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "Remark.date_remark",
            "description": "<p>The date this remark has been posted</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "Remark.pseudo_user",
            "description": "<p>The pseudo of the user who posted this remark, null if anonymous</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "Remark.id_context",
            "description": "<p>The id of the context of this remark</p>"
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
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/remarks.js",
    "groupTitle": "Remarks"
  },
  {
    "type": "put",
    "url": "/remarks/:idRemark/seen",
    "title": "Seen +1",
    "description": "<p>Increase the number of &quot;seen&quot; of this Remark by 1</p>",
    "name": "PutSeen",
    "group": "Remarks",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "Success",
            "description": ""
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
            "description": "<p>The Remark doesn't exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/remarks.js",
    "groupTitle": "Remarks"
  },
  {
    "type": "put",
    "url": "/remarks/:idRemark/suffered",
    "title": "Suffered +1",
    "description": "<p>Increase the number of &quot;suffered&quot; of this Remark by 1</p>",
    "name": "PutSuffered",
    "group": "Remarks",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "Success",
            "description": ""
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
            "description": "<p>The Remark doesn't exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/remarks.js",
    "groupTitle": "Remarks"
  },
  {
    "type": "delete",
    "url": "/remarks_contexts/:idRemarksContext",
    "title": "Delete a Remarks Context",
    "description": "<p>Delete the Remark Context</p>",
    "name": "DeleteRemarksContext",
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
    "error": {
      "fields": {
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
        ],
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
            "type": "string",
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
    "type": "patch",
    "url": "/remarks_contexts/:idRemarksContext",
    "title": "Update a Remarks Context",
    "description": "<p>Update the data of the Remark Context</p>",
    "name": "PatchRemarksContext",
    "group": "Remarks_Contexts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_context",
            "description": "<p>The name of the Remarks Context.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "color_context",
            "description": "<p>The color of the Remarks Context in hex format.</p>"
          }
        ]
      }
    },
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
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "RemarksContext",
            "description": "<p>the Remarks Contexts</p>"
          },
          {
            "group": "200",
            "type": "integer",
            "optional": false,
            "field": "RemarksContext.id_context",
            "description": "<p>The id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "RemarksContext.name_context",
            "description": "<p>The name</p>"
          },
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "RemarksContext.color_context",
            "description": "<p>The color associated</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
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
        ],
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
            "type": "String",
            "optional": false,
            "field": "color_context",
            "description": "<p>The color of the Remarks Context in hex format.</p>"
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
    "type": "delete",
    "url": "/remarks/:idRemark/responses/:idResponse/dislike",
    "title": "UnDislike a Response",
    "description": "<p>Decrease the number of &quot;dislike&quot; of this Response by 1</p>",
    "name": "DeleteDislike",
    "group": "Responses",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "Success",
            "description": ""
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
            "description": "<p>The Response doesn't exists</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "RemarkNotFound",
            "description": "<p>The Remark doesn't exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/responses.js",
    "groupTitle": "Responses"
  },
  {
    "type": "delete",
    "url": "/remarks/:idRemark/responses/:idResponse",
    "title": "Delete a Response",
    "description": "<p>Delete the Reponse if the user is the owner of this Reponse or is an admin</p>",
    "name": "DeleteResponse",
    "group": "Responses",
    "permission": [
      {
        "name": "NeedToken",
        "title": "The json Web token (jwt) is needed",
        "description": ""
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "Success",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
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
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The Response doesn't exists</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "RemarkNotFound",
            "description": "<p>The Remark doesn't exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/responses.js",
    "groupTitle": "Responses",
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
    "type": "delete",
    "url": "/remarks/:idRemark/responses/:idResponse/like",
    "title": "UnLike a Response",
    "description": "<p>Decrease the number of &quot;like&quot; of this Response by 1</p>",
    "name": "Deletelike",
    "group": "Responses",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "Success",
            "description": ""
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
            "description": "<p>The Response doesn't exists</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "RemarkNotFound",
            "description": "<p>The Remark doesn't exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/responses.js",
    "groupTitle": "Responses"
  },
  {
    "type": "get",
    "url": "/remarks/:idRemark/responses/:idResponse",
    "title": "Get a Response",
    "description": "<p>Get the data of the Reponse</p>",
    "name": "GetResponse",
    "group": "Responses",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "Response",
            "description": "<p>An object containing the Response data</p>"
          },
          {
            "group": "200",
            "type": "number",
            "optional": false,
            "field": "Response.id_response",
            "description": "<p>The id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Response.description_response",
            "description": "<p>The content of the Response</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Response.nb_likes_response",
            "description": "<p>The number of users that liked this Response</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Response.nb_dislikes_response",
            "description": "<p>The number of users that disliked this Response</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Response.date_remsponse",
            "description": "<p>The date this response has been posted</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Response.pseudo_user",
            "description": "<p>The pseudo of the user who posted this response, null if anonymous</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Response.id_responses_type",
            "description": "<p>The id of the type of this response</p>"
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
            "description": "<p>The Reponse doesn't exists</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "RemarkNotFound",
            "description": "<p>The Remark doesn't exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/responses.js",
    "groupTitle": "Responses"
  },
  {
    "type": "get",
    "url": "/remarks/:idRemark/responses",
    "title": "Get All Responses for a Remark",
    "description": "<p>Get the list of all Responses for this Remark</p>",
    "name": "GetResponses",
    "group": "Responses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number[]",
            "optional": true,
            "field": "type",
            "description": "<p>Select only the Responses which have type in this array. Ex /remarks/1/Responses?type=[&quot;1&quot;,&quot;3&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"date\"",
              "\"popularity\""
            ],
            "optional": true,
            "field": "sortby",
            "defaultValue": "date",
            "description": "<p>Sort the remarks by the most recent or popular</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"ASC\"",
              "\"DESC\""
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "DESC",
            "description": "<p>the order of the sort</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "Responses",
            "description": "<p>An array containing the Responses</p>"
          },
          {
            "group": "200",
            "type": "number",
            "optional": false,
            "field": "Responses.id_response",
            "description": "<p>The id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Responses.description_response",
            "description": "<p>The content of the Response</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Responses.nb_likes_response",
            "description": "<p>The number of users that liked this Response</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Responses.nb_dislikes_response",
            "description": "<p>The number of users that disliked this Response</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Responses.date_remsponse",
            "description": "<p>The date this response has been posted</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Responses.pseudo_user",
            "description": "<p>The pseudo of the user who posted this response, null if anonymous</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Responses.id_responses_type",
            "description": "<p>The id of the type of this response</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/responses.js",
    "groupTitle": "Responses",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "RemarkNotFound",
            "description": "<p>The Remark doesn't exists</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/remarks/:idRemark/responses",
    "title": "Add a Reponse",
    "description": "<p>Create a new Reponse</p>",
    "name": "PostResponse",
    "group": "Responses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": true,
            "field": "Authorization",
            "description": "<p>Bearer token : The token of that authentify the user, if it isn't set, then the user will be considered as anonymous</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description_response",
            "description": "<p>The content of the response</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_response_type",
            "description": "<p>The id of the Response Type of this Reponse</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "Response",
            "description": "<p>An object containing the Response data</p>"
          },
          {
            "group": "201",
            "type": "number",
            "optional": false,
            "field": "Response.id_response",
            "description": "<p>The id</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "Response.description_response",
            "description": "<p>The content of the Response</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "Response.nb_likes_response",
            "description": "<p>The number of users that liked this Response</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "Response.nb_dislikes_response",
            "description": "<p>The number of users that disliked this Response</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "Response.date_remsponse",
            "description": "<p>The date this response has been posted</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "Response.pseudo_user",
            "description": "<p>The pseudo of the user who posted this response, null if anonymous</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "Response.id_responses_type",
            "description": "<p>The id of the type of this response</p>"
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
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "RemarkNotFound",
            "description": "<p>The Remark doesn't exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/responses.js",
    "groupTitle": "Responses"
  },
  {
    "type": "put",
    "url": "/remarks/:idRemark/responses/:idResponse/dislike",
    "title": "Dislike a Response",
    "description": "<p>Increase the number of &quot;dislike&quot; of this Response by 1</p>",
    "name": "PutDislike",
    "group": "Responses",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "Success",
            "description": ""
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
            "description": "<p>The Response doesn't exists</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "RemarkNotFound",
            "description": "<p>The Remark doesn't exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/responses.js",
    "groupTitle": "Responses"
  },
  {
    "type": "put",
    "url": "/remarks/:idRemark/responses/:idResponse/like",
    "title": "Like a Response",
    "description": "<p>Increase the number of &quot;like&quot; of this Response by 1</p>",
    "name": "Putlike",
    "group": "Responses",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "Success",
            "description": ""
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
            "description": "<p>The Response doesn't exists</p>"
          },
          {
            "group": "404",
            "optional": false,
            "field": "RemarkNotFound",
            "description": "<p>The Remark doesn't exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/responses.js",
    "groupTitle": "Responses"
  },
  {
    "type": "delete",
    "url": "/responses_types/:idResponseType",
    "title": "Delete a Responses Type",
    "description": "<p>Delete the Remark Context</p>",
    "name": "DeleteResponsesType",
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
    "error": {
      "fields": {
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
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The Responses Type doesn't exists</p>"
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
            "type": "object",
            "optional": false,
            "field": "ReponseType",
            "description": "<p>the Response Type</p>"
          },
          {
            "group": "200",
            "type": "integer",
            "optional": false,
            "field": "ReponseType.id_response_type",
            "description": "<p>The id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ReponseType.name_response_type",
            "description": "<p>The name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ReponseType.emoji_response_type",
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
    "type": "patch",
    "url": "/responses_types/:idResponseType",
    "title": "Update a Responses Type",
    "description": "<p>Update the data of the Remark Context</p>",
    "name": "PatchResponsesType",
    "group": "Responses_Types",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_response_type",
            "description": "<p>The name of the Responses Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "emoji_response_type",
            "description": "<p>The emoji associated with this responses type.</p>"
          }
        ]
      }
    },
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
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "ReponseType",
            "description": "<p>the Response Type</p>"
          },
          {
            "group": "200",
            "type": "integer",
            "optional": false,
            "field": "ReponseType.id_response_type",
            "description": "<p>The id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ReponseType.name_response_type",
            "description": "<p>The name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "ReponseType.emoji_response_type",
            "description": "<p>The emoji associated</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
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
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The Responses Type doesn't exists</p>"
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
            "field": "pseudo_user",
            "description": "<p>User unique username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "5..",
            "optional": false,
            "field": "password_user",
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
