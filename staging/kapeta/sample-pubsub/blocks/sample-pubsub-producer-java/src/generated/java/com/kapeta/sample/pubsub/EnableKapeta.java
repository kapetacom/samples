/**
 * GENERATED SOURCE - DO NOT EDIT
 */
package com.kapeta.sample.pubsub;

import com.kapeta.spring.annotation.KapetaEnableGooglePubSub;
import com.kapeta.spring.annotation.KapetaEnableRestResource;
import com.kapeta.spring.annotation.KapetaSpringApplication;
import java.lang.annotation.*;

@Target({ ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@KapetaSpringApplication
@KapetaEnableRestResource
@KapetaEnableGooglePubSub
public @interface EnableKapeta {
}
