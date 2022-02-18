#!/usr/bin/env python3
"""Session auth Module"""


from flask import session, request, jsonify, abort
from models.user import User
import os
from api.v1.views import app_views


@app_views.route('/auth_session/login', methods=['POST'], strict_slashes=False)
def login() -> str:
    """Session Login

    Returns:
        str: -
    """
    email = request.form.get('email')
    if email is None:
        return jsonify({"error": "email missing"}), 400

    password = request.form.get('password')
    if password is None:
        return jsonify({"error": "password missing"}), 400

    try:
        user = User.search({'email': email})
    except Exception:
        return jsonify({"error": "no user found for this email"}), 404

    if not user:
        return jsonify({"error": "no user found for this email"}), 404

    for u in user:
        if u.is_valid_password(password) is False:
            return jsonify({"error": "wrong password"}), 401

    from api.v1.app import auth

    session_id = auth.create_session(user[0].id)
    user_info = jsonify(user[0].to_json())
    current_cookie = os.getenv('SESSION_NAME')
    user_info.set_cookie(current_cookie, session_id)

    return user_info


@app_views.route('/auth_session/logout', methods=['DELETE'],
                 strict_slashes=False)
def logout() -> str:
    """Logout

    Returns:
        str: str
    """
    from api.v1.app import auth

    if auth.destroy_session(request) is False:
        abort(404)
    return jsonify({}), 200
