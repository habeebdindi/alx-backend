#!/usr/bin/env python3
""" This module contains a class that's part of a caching system
"""

BaseCaching = __import__('base_caching').BaseCaching


class MRUCache(BaseCaching):
    """This class discard the first item put in cache (MRU algorithm)
    """
    def __init__(self):
        """Initializer
        """
        super().__init__()
        self.block = []

    def put(self, key, item):
        """assign to the dictionary self.cache_data the item value for the key.
        """
        if key is None or item is None:
            return

        self.cache_data[key] = item
        if key in self.block:
            k = self.block.pop(self.block.index(key))
            self.block.append(k)
        else:
            self.block.append(key)

        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            removed = self.block.pop(len(self.block) - 2)
            print("DISCARD: {}\n".format(removed))
            del self.cache_data[removed]

    def get(self, key):
        """return the value in self.cache_data linked to key.
        """
        if key is None or key not in self.cache_data:
            return None
        k = self.block.pop(self.block.index(key))
        self.block.append(k)
        return self.cache_data.get(key)
