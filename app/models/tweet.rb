class Tweet < ApplicationRecord
	def self.search_words(words)
		TwitterClient.search(words, lang: "en").first.text
	end
end
