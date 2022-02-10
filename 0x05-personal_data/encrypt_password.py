#!/usr/bin/env python3
"""Encrypt password"""


import bcrypt


def hash_password(password: str) -> bytes:
    """Hash Password
    """
    passw = bytes(password, 'utf-8')
    encrypt = bcrypt.hashpw(passw, bcrypt.gensalt())
    return encrypt


def is_valid(hashed_password: bytes, password: str) -> bool:
    """validate
    """
    status = bcrypt.checkpw(bytes(password, 'utf-8'), hashed_password)
    return status
