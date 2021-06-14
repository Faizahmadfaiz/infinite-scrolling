import { useEffect, useCallback, useRef } from 'react'

interface payloadType {
  page: number
}
// make API calls and pass the returned data via dispatch
export const useFetch = (payload: payloadType, dispatch: any): void => {
  useEffect(() => {
    dispatch({ type: 'FETCHING_IMAGES', fetching: true })
    fetch(`https://picsum.photos/v2/list?page=${payload.page}&limit=10`)
      .then((data) => data.json())
      .then((images) => {
        dispatch({ type: 'STACK_IMAGES', images })
        dispatch({ type: 'FETCHING_IMAGES', fetching: false })
      })
      .catch((e) => {
        // handle error
        dispatch({ type: 'FETCHING_IMAGES', fetching: false })
        return e
      })
  }, [dispatch, payload.page])
}

// infinite scrolling with intersection observer
export const useInfiniteScroll = (scrollRef: any, dispatch: any): void => {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            dispatch({ type: 'ADVANCE_PAGE' })
          }
        })
      }).observe(node)
    },
    [dispatch]
  )

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current)
    }
  }, [scrollObserver, scrollRef])
}

// lazy load images with intersection observer
export const useLazyLoading = (imgSelector: string, items: any) => {
  const imgObserver = useCallback((node) => {
    const intObs = new IntersectionObserver((entries: any[]) => {
      entries.forEach((en) => {
        if (en.intersectionRatio > 0) {
          const currentImg = en.target
          const newImgSrc = currentImg.dataset.src

          // only swap out the image source if the new url exists
          if (!newImgSrc) {
            console.error('Image source is invalid')
          } else {
            currentImg.src = newImgSrc
          }
          intObs.unobserve(node)
        }
      })
    })
    intObs.observe(node)
  }, [])

  const imagesRef = useRef<any | null>(null)

  useEffect(() => {
    imagesRef.current = document.querySelectorAll(imgSelector)

    if (imagesRef.current) {
      imagesRef.current.forEach((img: any) => imgObserver(img))
    }
  }, [imgObserver, imagesRef, imgSelector, items])
}
