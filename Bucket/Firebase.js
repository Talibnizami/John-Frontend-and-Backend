import admin from 'firebase-admin'

var serviceAccount = {
    "type": "service_account",
    "project_id": "john-131ce",
    "private_key_id": "9371f8618c531c47f7653b8d692fd9564fd3a58f",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7bx41An8MZw/N\naw0Y1e5K7jLBuBiQqFgp89wPT0Rfguy0V0TQV3cDpd8EaJsOjEeQrazkTj2BMYDD\nuKIC2Rd7xBMIg+UxGl2nA+DgwrLlXkqjUTyzVz01JREeohqt4NVr9gth50FHj5CG\nALlUfOIcV2mFije3XPN1Ih583UkOlj1nBqTdXLZMfoEQ6UoP8+o8xSK4bMhUhHuI\nAC2LQgGXRi2sLudh0ku3GCly9GZFbR+hnnhwUez75akqv8QEMOUVmzrzvcgyxHFr\nREUQX1W2hJp6/rO2H5uq9OUaB9uw7tZJtPJazlB6lxalGzdUigZSi4bURQPDQgtE\nUyU1q8tXAgMBAAECggEAWOOvPzOSXiboYyKQQQV/77A8iQuONthni2nXpLkSc3tr\nV3GFtIquah/5fqU/V+xmKjJ7aoDCgWkhKHEBAHnFPdB0uFaY1Kss2/6mYOFlJwsL\nOZ3WvDS01eXg0xbMsUaN4Jf8uO8L0ey/fRWNzwg00X0REaBFoSOnYBcQv2XQdmYv\nF7ZwT38Ky39G+VtYVqkqv/jaZYHIq1HN+FQZEKL4VGtxPvgAwy14JKy13pHclaTy\n4FTvDS2ijyN0FKWbjNxL36iAJ6HSrKGLzEYaICEcma+fwJmeim+an9+qgTzu58Mq\nqhPwOIBFgOffmjlInkXQQHdOChk35NkyTrXM+3ZxXQKBgQD8ZPQTtExeM74auIyd\nIJA8Hr/fnN4HmObWEfoKHnVxct1heMsT3RZvQQN0V6xxbfG8l4OBiTIPiTrU5aCS\ncHK4VMxFfClix2AzPhRVtKfMhkG1txGXd5M2TKryYZmJrUb03nW09UHuAbjFE4xT\nYPuB1JNosPNb9JOLNhKKLdg/nQKBgQC+HJgoUPjEs3f7sQPM2RrhirPgar1K8YVc\nuucSDUpYeb5CkhwTHMTDK1rXphzKdKuhAG3F2S+9QKuq4k4N+n0JiaHJThmWxAuT\nXaYHdxGo4onGW5jwRsiuAO2Im65rzkouQ93b+UkbgfI+OmLhCg03z3h8fFr1eXsQ\npJ7HLU7WgwKBgQDD+n+rbSx/WR4cEYDd4RMeG6JRN7UPoSJcxsioYs4+sTpFHU5S\ntjFdYdYU2J8F1KEIF339b1J3zc7o0QTFsJrjlrSmn6pjEP0ZzPJtOkGxBe6v8t6u\nBiNA3nc+jZpy1SFrsfEj+eyfqqaWIH+tnnisbyum9v+AP4Dxb6MluENZ4QKBgFD+\ne7DJdoLO9zIq4zSV1kb6wdG9h/Hy3d943VMqiF8TVwSjnQRjgEyqHuS7J471j91j\nAmGFOzqE395I1fpMmpLCqUPLW0mJMmlRP5f0mXh7Mzln8suDTKIdURWfRfs2AxKc\n5Vt/ZC8s+JicZV38207IvEtE67ejTtPzXpX67pijAoGBAKEIcTFpyteepAvD6XCU\njbjwHT0Nlz8Ka6Er1v1DfeMfOjTSWlORgEOt4vnsgfAG56gnVduJ7G8nmoLTsFos\nK8Cc3FXoJzPBMPIjm6fPgte6dgvmkacvPRBNRqEwCuCYgcuOcdIKaEvgqey3OfrY\nyo4Uzwl6Jw0gGU7qPd3z7Lh8\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-hrz95@john-131ce.iam.gserviceaccount.com",
    "client_id": "117935923686708978464",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hrz95%40john-131ce.iam.gserviceaccount.com"
  }
  
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://john-131ce.firebaseio.com"
});
const bucket = admin.storage().bucket("gs://john-131ce.appspot.com");

export default bucket;