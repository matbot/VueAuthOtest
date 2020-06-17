import Vue from "vue";
import createAuth0Client from "@auth0/auth0-spa-js";

// Default action after authentication.
const DEFAULT_REDIRECT_CALLBACK = () =>
    window.history.replaceState({}, document.title, window.location.pathname);

let instance;

// Get current instance of Auth0 SDK.
export const getInstance = () => instance;

// Create a new instance of Auth0 SDK if one doesn't exist.
//  If instance exists, return that instance.
export const useAuth0 = ({
    onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
    redirectUri = window.location.origin,
    ...options
}) => {
    if(instance) return instance;

    // Auth0 instances are Vue objects.
    instance = new Vue({
        data() {
            return {
                loading: true,
                isAuthenticated: false,
                user: {},
                auth0Client: null,
                popupOpen: false,
                error: null
            };
        },
        methods: {
            // Authenticate user with popup login.
            async loginWithPopup(o) {
                this.popupOpen = true;
                try {
                    await this.auth0Client.loginWithPopup(o);
                } catch(e) {
                    console.log(e);
                }
                this.user = await this.auth0Client.getUser();
                this.isAuthenticated = true;
            },
            // Handle user authentication via redirect.
            async handleRedirectCallback() {
                this.loading = true;
                try {
                    await this.auth0Client.handleRedirectCallback();
                    this.user = await this.auth0Client.getUser();
                    this.isAuthenticated = true;
                } catch(e) {
                    this.error = e;
                } finally {
                    this.loading = false;
                }
            },
            loginWithRedirect(o) {
                return this.auth0Client.loginWithRedirect(o);
            },
            getIdTokenClaims(o) {
                return this.auth0Client.getIdTokenClaims(o);
            },
            getTokenSilently(o) {
                return this.auth0Client.getTokenSilently(o);
            },
            getTokenWithPopup(o) {
                return this.auth0Client.getTokenWithPopup(o);
            },
            logout(o) {
                return this.auth0Client.logout(o);
            }
        },
        // Instantiate the SDK client in the Vue lifecycle.
        async created() {
            this.auth0Client = await createAuth0Client({
                domain: options.domain,
                client_id: options.clientId,
                audience: options.audience,
                redirect_uri: redirectUri
            });
            try {
                if (
                    window.location.search.includes("code=") &&
                    window.location.search.includes("state=")
                ) {
                    const { appState } = await this.auth0Client.handleRedirectCallback();
                    onRedirectCallback(appState);
                }
            } catch (e) {
                this.error = e;
            } finally {
                this.isAuthenticated = await this.auth0Client.isAuthenticated();
                this.user = await this.auth0Client.getUser();
                this.loading = false;
            }
        }
    });
    return instance;
};
// Create Vue plugin to expose the SDK object.
export const Auth0Plugin = {
    install(Vue, options) {
        Vue.prototype.$auth = useAuth0(options);
    }
};
