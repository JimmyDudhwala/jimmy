"use client"
import React from "react"
import { motion } from "framer-motion"

interface QuoteProps {
  quote: string
    highlights: string[]
}

const renderQuote: React.FC<QuoteProps> = ({quote, highlights}) => {
    const words = quote.split(" ")
    const result: React.ReactNode[] = []

    let i = 0
    while (i < words.length) {
      let matched = false
      for (const phrase of highlights) {
        const phraseWords = phrase.split(" ")
        const slice = words.slice(i, i + phraseWords.length).join(" ")
        if (slice === phrase) {
          result.push(
            <motion.span
             
                 key={i} className="relative inline-block px-1 mx-[1px] break-words">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-0 left-0 w-full h-1/3 bg-[#FF6D00] z-0 rounded-sm"
              
              />
              <span
              
               className="relative   z-10">{phrase}</span>
            </motion.span>
          )
          i += phraseWords.length
          matched = true
          break
        }
      }
      if (!matched) {
        result.push(<motion.span
               initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }} key={i} className="relative">{words[i]} </motion.span>)
        i++
      }
    }
      return result
  }
  
  export default renderQuote

   