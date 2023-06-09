import React from "react";
import { motion } from "framer-motion";

export default function Loading() {

    // From "https://github.com/YouCodeSchool/Loader/blob/main/Loader.jsx"
    const loadingContainer = {
        width: "4rem",
        height: "4rem",
        display: "flex",
        justifyContent: "space-around",
      };
      const loadingCircle = {
        display: "block",
        width: "1rem",
        height: "1rem",
        backgroundColor: "#000000",
        borderRadius: "0.5rem",
      };
      
      const loadingContainerVariants = {
        start: {
          transition: {
            staggerChildren: 0.2,
          },
        },
        end: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      };
      
      const loadingCircleVariants = {
        start: {
          y: "0%",
        },
        end: {
          y: "60%",
        },
      };
      const loadingCircleTransition = {
        duration : 0.1,
        yoyo : Infinity,
        ease: 'easeInOut'
      }
    return (
            <div className="loading">
              <div className="fixed  w-full min-h-screen z-50 bg-black opacity-30" />
              <div className="flex fixed w-full justify-center items-center h-screen">
                <motion.div
                  style={loadingContainer}
                  variants={loadingContainerVariants}
                  initial="start"
                  animate="end"
                >
                  <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                  ></motion.span>
                  <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                  ></motion.span>
                  <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                  ></motion.span>
                </motion.div>
              </div>
            </div>
          );
        };