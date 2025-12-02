"use client";

import Review from "@/interfaces/user_review.interface";
import TEXT from "@/lang/es.json";
import Avatar from "@/components/ui/Avatar"
import { Button, Card, CardContent, CardHeader, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Rating, Typography, DialogActions } from "@mui/material";
import { RiArrowDownSLine } from "@remixicon/react";
import { Suspense, useEffect, useRef, useState } from "react";

interface TestimonialCardProps {
  review: Review;
}

export default function TestimonialCard({review}: TestimonialCardProps) {
  const [open, setOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  
  const descriptionElementRef = useRef<HTMLElement>(null);

  const handleOpen = (review: Review) => {
    setSelectedReview(review);
    setOpen(true);
    setShowPreview(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowPreview(false);
  };

  
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return(
    <>
    <Card>
      <CardHeader
        avatar={<Avatar src={review.picture} alt={`${review.author.charAt(0)}`} />}
        action={<IconButton onClick={() => handleOpen(review)} aria-label="Leer más"><RiArrowDownSLine /></IconButton>}
        title={<span className='!font-semibold !line-clamp-1'>{review.author}</span>}
        subheader={<span className='!flex !items-center !justify-start !gap-1 !text-muted-foreground !text-xs'>{review.timestamp} en<Avatar className="h-4 w-4" src={review.platformLogo} alt={review.platformName} />{review.platformName}</span>}
      />
      <CardContent className='!pt-0'>
        <Rating className="!text-secondary" size='small' name="read-only" value={review.rating} readOnly />
        <Typography className='!line-clamp-5 !min-h-[100px] !max-h-[100px]' variant="body2" color="text.secondary">{review.text}</Typography>
      </CardContent>
    </Card>

    {showPreview && (
      <Suspense>
        <Dialog open={open} onClose={handleClose} scroll={'paper'} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
          <DialogTitle id="scroll-dialog-title">
            {selectedReview && (
              <span className='flex flex-row flex-wrap items-center justify-start gap-3 md:flex-nowrap md:gap-4'>
                <Avatar src={selectedReview.picture} alt={`${selectedReview.author.charAt(0)}`} />
                <span className='flex flex-col'>
                  <Typography className='!font-medium' variant="subtitle1" color="text.primary">{selectedReview.author}</Typography>
                  <span className='!flex !items-center !justify-start !gap-1 !text-muted-foreground !text-xs'>{selectedReview.timestamp} en<Avatar src={selectedReview.platformLogo} alt={selectedReview.platformName} className="h-4 w-4" />{selectedReview.platformName}</span>
                </span>
                <span className='flex justify-start grow md:justify-end'>
                  <Rating className="!text-secondary" size='small' name="read-only" value={selectedReview.rating} readOnly />
                </span>
              </span>
            )}
          </DialogTitle>
          <DialogContent dividers={true}>
            <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
              {selectedReview && selectedReview.text}
            </DialogContentText>
          </DialogContent>
          <DialogActions className='!px-6'>
            <Button onClick={handleClose}>{TEXT.textClose1}</Button>
          </DialogActions>
        </Dialog>
      </Suspense>
    )}
    </>
  )
}