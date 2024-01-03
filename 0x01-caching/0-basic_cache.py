#!/usr/bin/env python3
""" This module contains a class
"""

BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """This class is a caching system
    """
    def __init__(self):
        """Initializer
        """
        super().__init__()

    def put(self, key, item):
        """assign to the dictionary self.cache_data the item value for the key.
        """
        if key is None or item is None:
            return
        self.cache_data[key] = item

    def get(self, key):
        """return the value in self.cache_data linked to key.
        """
        if key is None or not self.cache_data.get(key):
            return None
        return self.cache_data.get(key)
