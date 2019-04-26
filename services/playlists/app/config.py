import os

class BaseConfig:
    """Base configuration"""
    TESTING = False
    APP_CLIENT_KEY = os.environ.get('APP_CLIENT_KEY')
    APP_CLIENT_SECRET = os.environ.get('APP_CLIENT_SECRET')

class DevConfig(BaseConfig):
    """Development configuration"""
    pass

class TestConfig(BaseConfig):
    """Testing configuration"""
    TESTING = True

class ProdConfig(BaseConfig):
    """Production configuration"""
    pass
