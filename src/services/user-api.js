/**
 * Fake api call de login
 * @param username
 * @param password
 * @returns {Promise}
 */
export function login(username, password) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if(username === 'toto' && password === 'toto') {
        resolve({status: 200});
      } else {
        reject(
          {
            status:403,
            reason:`Undefined ${username} combination and password`
          }
        )
      }
    }, 500)
  });
}

/**
 * Fake api call de register
 * @param username
 * @param password
 * @param password_confirmation
 * @returns {Promise}
 */
export function register(username, password, password_confirmation) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if(password === password_confirmation) {
        resolve({status: 200});
      } else {
        reject(
          {
            status: 500,
            reason: `Password and password confirmation does not match`
          }
        )
      }

    }, 500)
  });
}

/**
 * Fake api call de logout
 * @returns {Promise}
 */
export function logout() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve({status: 200});
    }, 500)
  });
}

